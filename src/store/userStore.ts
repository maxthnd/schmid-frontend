import { defineStore } from 'pinia';
import { User } from "../user/User";
import axios from 'axios';

export const userStore = defineStore('user', {
    state: () => ({
        user: null as User | null,
    }),

    actions: {
        setUser(user: User) {
            this.user = user;
        },
        logout() {
            this.user = null;
            localStorage.removeItem('dashboard');
        },
        async fetchUserData(username?: string) {
            try {
                const token = localStorage.getItem('dashboard');
                if (!token) {
                    console.error("Kein Token gefunden");
                    return;
                }

                const url = `http://localhost:8080/api/user?username=${username || ''}`;
                console.log("Sende Anfrage an:", url);

                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });

                const userData = response.data;
                console.log('Benutzerdaten erhalten:', userData);

                const user = new User(
                    userData.id,
                    userData.username,
                    userData.firstName || '',
                    userData.lastName || '',
                    userData.email || '',
                    userData.roles || []
                );
                this.setUser(user);

                console.log('Benutzer im Store gesetzt:', this.user);
            } catch (error) {
                console.error("Fehler beim Laden der Benutzerdaten:", error);
                throw error;
            }
        }
    },

    getters: {
        isAuthenticated: (state) => !!state.user,
        getUser: (state) => state.user
    }
});
