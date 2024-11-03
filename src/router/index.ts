import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MaintenanceView from '../views/MaintenanceView.vue';
import axios from 'axios';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/maintenance',
      name: 'maintenance',
      component: MaintenanceView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dmgmori',
      name: 'dmgmori',
      component: () => import('../views/specific/DmgMoriView.vue')
    },
    {
      path: '/vorrichtungs-und-anlagenbau',
      name: 'vorrichtungs-und-anlagenbau',
      component: () => import('../views/specific/VUAView.vue')
    },
    {
      path: '/leistungsspektrum',
      name: 'leistungsspektrum',
      component: () => import('../views/specific/LSView.vue')
    },
    {
      path: '/maschinenpark',
      name: 'maschinenpark',
      component: () => import('../views/specific/MPView.vue')
    },
    {
      path: '/cad-cam',
      name: 'cad-cam',
      component: () => import('../views/specific/CCView.vue')
    },
    {
      path: '/messtechnik',
      name: 'messtechnik',
      component: () => import('../views/specific/MesstechnikView.vue')
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: () => import('../views/ImpressumView.vue')
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: () => import('../views/DatenschutzView.vue')
    },
    {
      path: '/lieferantenbewerbung',
      name: 'lieferantenbewerbung',
      component: () => import('../views/specific/LBView.vue')
    },
    {
      path: '/nachhaltigkeit',
      name: 'nachhaltigkeit',
      component: () => import('../views/specific/NHView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/specific/DashboardView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/specific/DashboardLoginView.vue')
    },
    {
      path: '/karriereportal',
      name: 'karriereportal',
      component: () => import('../views/specific/KPView.vue')
    }
  ]
});

axios.defaults.baseURL = 'https://api.maximilian-decker.com';

function isTokenExpired(token: string): boolean {
  if (!token || token.split('.').length !== 3) {
    console.log('Invalid token format: ', token);
    return true;
  }
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() > exp;
  } catch (e) {
    console.error('Error decoding token: ', e);
    return true;
  }
}

function getTokenExpiration(token: string): number {
  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload.exp * 1000;
}

async function extendToken(token: string) {
  try {
    const response = await axios.post('/api/auth/refresh', {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const newToken = response.data.token;
    localStorage.setItem('jwtToken', newToken);
    console.log("Token extended");
  } catch (error) {
    console.error('Could not extend Token:', error);
  }
}

router.beforeEach(async (to, from, next) => {
  const publicPages = ['/maintenance'];
  const authRequired = !publicPages.includes(to.path);
  const token = localStorage.getItem('jwtToken');

  if (authRequired) {
    if (!token || isTokenExpired(token)) {
      return next('/maintenance');
    }

    const expirationTime = getTokenExpiration(token);
    const currentTime = Date.now();
    const remainingTime = expirationTime - currentTime;

    if (remainingTime < 15 * 60 * 1000) {
      await extendToken(token);
    }
  }

  next();
});

export default router;
