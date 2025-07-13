# 🧭 Guía de Arquitectura Screaming para tu Proyecto Next.js

Esta guía resume las decisiones, conceptos y ejemplos tratados para aplicar **Screaming Architecture** de forma clara, escalable y coherente en tu proyecto con **Next.js**.

---

## ✨ 1. Filosofía de Screaming Architecture

> "When I look at the folder structure of your project, I should hear what the app does, not how it's built."

**Objetivo:** Organizar la aplicación por **funcionalidades del negocio (features)**, no por tecnologías (como componentes, estilos, utils, etc).

---

## 🏋️ 2. Definiciones clave

### ▶ Feature

Una **feature** es una unidad funcional del negocio. Puede representar:

- Una entidad de dominio (ej. `user`, `shop`, `product`)
- Un flujo funcional (ej. `auth`, `checkout`, `dashboard`, `profile`)

### ▶ Dominio (Domain)

Donde se representan las **entidades puras**, sin relación con la UI ni APIs. Está en `core/domain/`.

### ▶ Repositorio (Repository)

Encapsula el acceso a datos externos (fetch, axios, localStorage, etc).

### ▶ Servicio (Service)

Contiene lógica de negocio, adaptaciones, agregaciones. Se apoya en repositorios.

### ▶ ViewModel

Adapta una entidad de dominio para que la UI pueda consumirla de forma sencilla.

---

## 📂 3. Estructura de carpetas

```bash
app/
├─ (landing)/                 # Home, hero, marketing, etc
│   └─ page.tsx
├─ profile/                    # UI para perfil del usuario actual
└─ admin/users/                # Pagina admin de usuarios

core/
└─ domain/
    ├─ user/User.ts
    └─ user/UserRole.ts

features/
├─ users/
│   ├─ components/
│   │   ├─ EditUserForm.tsx
│   │   └─ UserProfileInfo.tsx
│   ├─ hooks/
│   │   └─ useUsers.ts
│   ├─ userRepository.ts
│   ├─ userService.ts
│   ├─ userViewModel.ts
│   └─ createUserSchema.ts
├─ auth/
│   ├─ LoginForm.tsx
│   ├─ RegisterForm.tsx
│   └─ useLogin.ts
├─ business/
│   └─ dashboard/
│       ├─ DashboardScreen.tsx
│       ├─ SummaryCard.tsx
│       ├─ ActionButton.tsx
│       ├─ useDashboardData.ts
│       └─ buildDashboardStats.ts
components/
└─ ui/                        # Atómicos reutilizables
    ├─ Button.tsx
    ├─ Card.tsx
    └─ Heading.tsx
```

---

## 🧵 4. Patrón de uso de entidades

```ts
// core/domain/user/User.ts
export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public role: UserRole,
    public createdAt?: Date,
    public deletedAt?: Date | null = null,
  ) {}

  isActive() {
    return !this.deletedAt;
  }
}
```

```ts
// features/users/userViewModel.ts
export interface UserViewModel {
  id: number;
  name: string;
  email: string;
  role: string;
  active: boolean;
}

export function mapToUserViewModel(user: User): UserViewModel {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    active: user.isActive(),
  };
}
```

---

## 🔐 5. Repositorios y servicios

```ts
// userRepository.ts
export const getUsers = async () => api.get('/users').then((r) => r.data);
export const createUser = async (dto: CreateUserDTO) =>
  api.post('/users', dto).then((r) => r.data);
```

```ts
// userService.ts
export const fetchUsers = async (): Promise<UserViewModel[]> => {
  const raw = await getUsers();
  const domain = raw.map((u) => new User(u.id, u.name, u.email, u.role));
  return domain.map(mapToUserViewModel);
};
```

---

## 🔒 6. Manejo de errores y feedback

- Se usa React Query (`useMutation`, `useQuery`) para manejar estados: `isPending`, `isError`, etc.
- Se puede usar Toasts o Alerts en `onError` y `onSuccess`.

```ts
const { mutate, isPending, isError, error } = useCreateUser();

mutate(data, {
  onSuccess: () => toast.success('Usuario creado'),
  onError: () => toast.error('Error al crear usuario'),
});
```

---

## ⚖️ 7. Cuándo una carpeta es una "feature"

| Caso                                           | ¿Es una feature?          | Dónde va                        |
| ---------------------------------------------- | ------------------------- | ------------------------------- |
| Entidad `User`, `Pack`, `Shop`                 | ✅ Sí                     | `features/users/` etc.          |
| Dashboard de comercio                          | ✅ Sí                     | `features/business/dashboard/`  |
| Pantalla de perfil del usuario                 | ✅ Sí (dentro de `users`) | `features/users/`               |
| Landing page con CTAs, hero, etc               | ❌ No                     | `app/(landing)/`                |
| Login y registro                               | ✅ Sí                     | `features/auth/`                |
| Sección "Políticas de Privacidad", "Acerca de" | ❌ No                     | `app/privacidad/page.tsx`, etc. |

---

Clean arch (santi lopez)

- // Un repositorio por cada tipo de datos

nlt-frontend/
├── app/
│ ├── layout.tsx
│ ├── page.tsx # Landing
│ ├── como-funciona/page.tsx
│ ├── politicas-de-privacidad/page.tsx
│ ├── login/page.tsx
│ ├── register/page.tsx
│ ├── profile/page.tsx
│ ├── productos/page.tsx # Página que usa feature "products"
│ └── admin/
│ └── usuarios/page.tsx # Usa feature "users"
│
├── core/
│ └── domain/
│ ├── user/
│ │ ├── User.ts
│ │ ├── UserRole.ts
│ │ └── index.ts
│ ├── product/
│ │ ├── Product.ts
│ │ ├── Category.ts
│ │ └── index.ts
│ ├── shop/
│ │ ├── Shop.ts
│ └── reservation/
│ ├── Reservation.ts
│
├── features/
│ ├── users/
│ │ ├── components/
│ │ │ ├── RegisterForm.tsx
│ │ │ ├── LoginForm.tsx
│ │ │ ├── UserProfileCard.tsx
│ │ │ └── RoleSelector.tsx
│ │ ├── hooks/
│ │ │ ├── useLogin.ts
│ │ │ ├── useRegister.ts
│ │ │ ├── useUsers.ts
│ │ │ └── useCreateUser.ts
│ │ ├── repositories/
│ │ │ ├── loginUser.ts
│ │ │ ├── registerUser.ts
│ │ │ ├── getUserProfile.ts
│ │ │ └── getAllUsers.ts
│ │ ├── schemas/
│ │ │ ├── loginSchema.ts
│ │ │ ├── registerSchema.ts
│ │ │ └── updateUserSchema.ts
│ │ ├── services/
│ │ │ └── transformUserResponse.ts
│ │ └── view-models/
│ │ ├── userViewModel.ts
│ │ └── mapToUserViewModel.ts
│
│ ├── products/
│ │ ├── components/
│ │ │ ├── ProductCard.tsx
│ │ │ ├── ProductList.tsx
│ │ │ └── ProductForm.tsx
│ │ ├── hooks/
│ │ │ ├── useProducts.ts
│ │ │ ├── useCreateProduct.ts
│ │ ├── repositories/
│ │ │ ├── getAllProducts.ts
│ │ │ └── createProduct.ts
│ │ ├── schemas/
│ │ │ └── createProductSchema.ts
│ │ └── view-models/
│ │ └── productViewModel.ts
│
│ ├── shops/
│ │ ├── components/
│ │ └── hooks/
│ │ ├── repositories/
│ │ └── schemas/
│ │ └── services/
│
│ └── reservations/
│ ├── components/
│ ├── hooks/
│ ├── repositories/
│ ├── schemas/
│ └── view-models/
│
├── components/
│ ├── layout/
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ ├── shared/
│ │ ├── Button.tsx
│ │ ├── Input.tsx
│ │ └── Modal.tsx
│ └── landing/
│ ├── HeroSection.tsx
│ ├── FeaturesSection.tsx
│ └── CallToAction.tsx
│
├── lib/
│ ├── axios.ts
│ ├── auth.ts # getToken, setToken, etc.
│ ├── queryClient.ts # TanStack Query client
│ └── utils.ts
│
├── styles/
│ └── globals.css
│
├── public/
│ └── logo.svg
│
├── tsconfig.json
├── tailwind.config.ts
└── package.json
