import {Job} from "./Job";
const API_URL = "https://164.92.187.212:8080/api/job";
const TOKEN = "dashboard";

export async function fetchJobs(): Promise<Job[]> {
    try {
        const response = await fetch(`${API_URL}/public/all`);
        if (!response.ok) {
            throw new Error("Fehler beim Abrufen der Jobs");
        }
        const data = await response.json();
        return data.map((job: any) => new Job(
            job.id,
            job.title,
            job.description,
            job.location,
            job.jobType,
            job.expectations,
            job.work,
            job.imageData,
        ));
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function createJob(job: Partial<Job>, file?: File): Promise<Job | null> {
    try {
        // Prüfen, ob eine Datei übergeben wurde
        if (file) {
            // Datei in Base64 umwandeln
            const base64File = await fileToBase64(file);
            // Base64-Daten zu `imageData` hinzufügen
            job.imageData = base64File;
        }

        // API-Aufruf zur Erstellung des Jobs
        const response = await fetch(`${API_URL}/secured/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...job, token: TOKEN }),
        });

        if (!response.ok) {
            throw new Error("Fehler beim Erstellen des Jobs");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}


export async function updateJob(id: number, job: Partial<Job>, imageFile?: File): Promise<Job | null> {
    let imageData: string | null = null;

    if (imageFile) {
        imageData = await fileToBase64(imageFile);
    }

    const jobData = {
        ...job,
        imageData: imageData,
    };

    try {
        const response = await fetch(`${API_URL}/secured/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jobData),
        });

        if (!response.ok) {
            throw new Error("Fehler beim Aktualisieren des Jobs");
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
}

export async function deleteJob(id: number): Promise<boolean> {
    try {
        const response = await fetch(`${API_URL}/secured/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: TOKEN }),
        });
        if (!response.ok) {
            throw new Error("Fehler beim Löschen des Jobs");
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
