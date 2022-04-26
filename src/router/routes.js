import Index from '@/components/index'
import Features from '@/components/features'
import Pricing from '@/components/pricing'
import Faq from '@/components/faq'
import NotFound from '@/components/notfound'

import main from '@/components/backend/main'
import login from '@/components/backend/login'
import register from '@/components/backend/register'

const routes = [{
  path: '/',
  component: Index,
  meta: { requiresAuth: false, name: 'default' }
},
{
  path: '/features',
  component: Features,
  meta: { requiresAuth: false, name: 'features' }
},
{
  path: '/pricing',
  component: Pricing,
  meta: { name: 'pricing' }
},
{
  path: '/faq',
  component: Faq,
  meta: { name: 'faq' }
},
{
  path: '/main',
  component: main,
  meta: { requiresAuth: true, name: 'login' }
},
{
  path: '/login',
  component: login,
  meta: { requiresGuest: true, name: 'Dashboard' }
},
{
  path: '/register',
  component: register,
  meta: { requiresGuest: true, name: 'register' }
},
{
  path: '*',
  component: NotFound,
  meta: { name: 'Page not found' }
}]

export default routes
