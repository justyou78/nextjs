This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Study

### 기능

1. Routing
2. Rendering
3. Data Fetching
4. Styling
5. Optimizations
6. Typescript
7. API Reference

### Routing

#### 기본 개념

- URL Segment: 슬래쉬(/)에 의해 분리된 URL Path의 일부분
- URL Path: 도메인 이후에 오는 URL 부분

#### Next(app Router)

- React Server Components로 구축된 새로운 App Router

- App Router는 'app' 이름을 가진 새로운 디렉토리 내부에서 동작한다.

- 이전에 사용했던 pages 디렉토리와 함께 사용이 가능한다.
  - 단, App Router가 Pages 라우터보다 높은 우선순위를 가진다.
  - 디렉토리 간 경로는 동일한 URL 경로로 확인되지 않아야 하며 충돌을 방지하기 위해 빌드 시간 오류가 발생합니다.

### React 필수 사항

Server Components

- 컴포넌트의 랜더링을 서버에서 수행한다.

- 장점
  1. 초기 페이지 로드를 빠르게 처리한다.
  2. 번들 사이즈를 줄인다.
  3. client-side runtime이 캐쉬 가능하고, 예측할 수 있는 사이즈를 가진다.

Client Components

- 컴포넌트의 랜더링을 클라리언트 측에서 수행한다.

- 정의 방법: 클라이언트 컴포넌트 파일 상위에 'use client' 인용하기.

  - 어떤 import 구문보다 상위에 해당 정의를 기입해야한다.

- 클라이언트 컴포넌트에서 자식 컴포넌트를 포함한 'import'된 모든 모듈들은 클라이언트 번들 부븐으로 고려된다.

- 클라이언트 컴포넌트 모듈 그래프에 있는 컴포넌트들은 주로 클라이언트에서 랜더링 되지만, Next.js에서는 서버에서 사전데 랜더링되고, 클라이언트에서 합성될 수있다.

- 클라이언트 모듈 바운더리에 오직 한번만 'use client'를 규정하는 것을 권장한다.

#### Server 그리고 Client 컴포넌트 사용 시기

- Server Component
  - Fetch data
  - Access backend resources (directly)
  - Keep sensitive information on the server: (access tokens, API keys, etc)
  - Keep large dependencies on the server / Reduce client-side JavaScript
- Client Component
  - Add interactivity and event listeners( onClick(), onChange(), etc)
  - Use State and Lifecycle Effects (useState(), useReducer(), useEffect(), etc)
  - Use browser-only APIs
  - Use custom hooks that depend on state, effect, or browser-only APIs
  - Use React Class components

#### React의 Server 및 Client 컴포넌트 랜더링 처리.

1. 클라이언트에게 결과를 보내기 전에 모든 서버 컴포넌트를 랜더링한다.
   1. 이것은 클라이언트 컴포넌트 내부에 중첩된 서버 컴포넌트도 포함된다.
2. 클라이언트에서 클라이언트 컴포넌트를 랜더하고 둘 사이를 병합한다.
   - 만약 서버 컴포넌트가 클라이언트 컴포넌트 내부에 중첩된어 있다면 그들의 랜더된 컨탠트는 정확하게 클라이언트 컴포넌트 내부에 배치된다.

**Next.js에서 초기 페이지가 랜더링되는 빠른 페이지 로드를 위하여 서버 컴포넌트의 랜더된 결과와 클라이언트 컴포넌트는 서버에서 HTML로 사전 랜더링 된다.**

**서버 구성 요소를 클라이언트 구성 요소로 가져오는데는 추가 서버 왕복이 필요하므로 제한이 있다. (권장 방식: prop으로 서버 컴포넌트를 가져오는 방식)**

**클라이언트 컴포넌트에서 서버 컴포넌트를 직접적으로 임포트하여 랜더링할 수 없다.**

#### 서버 전용 코드를 클라이언트 컴포넌틑에서 제외하기.

- 사용방법: npm install server-only
- Client Component에서 불러올 수 없도록 해당 파일에 `import 'server-only'` 를 기재한다.

  - 만약 Client Component에서 파일 내부 함수를 불러올 경우, build-time error가 발생한다.

- `client-only` 패키지는 오직 클라이언크 코드를 포함하하는 모듈들에 사용할 수 있다.
  - Ex window object

#### Data Fetching

- 데이터 패칭은 서버 컴포넌트에서 사용하는 것을 권장한다.

- 서버 컴포넌트에서는 중복된 데이터 요청은 자동으로 제거된다.

#### Third-party packages

- Third-party packages에는 `use client` 지시자가 지정되지 않는 경우가 있을 수 있다. 만약에 해당 컴포넌트를 서버 컴포넌트에서 사용하게 된다면 에러가 발생할 수 있다.

- 해결하기 위한 방법

```
'use client'

import { Carousel } from 'acme-carousel'

export default Carousel
```

- 대부분의 경우에서는 클라이언트 컴포넌트 내부에서 Third-party 컴포넌트를 사용하므로 문제되는 경우가 없을 것이다. 하지만, 한가지 예외는 **provider 컴포넌트**를 사용하는 경우이다.

- provider 컴포넌트도 서버 컴포넌트에서 사용하기 위해서 다음과 같이 코드를 수정할 수 있다.

```
'use client'

import { ThemeProvider } from 'acme-theme'
import { AuthProvider } from 'acme-auth'

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  )
}
```

```
import { Providers } from './providers'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

### Defining Routes

#### 경로 생성

- 폴더는 라우트 경로에 기반되어 구성한다.
  - Ex URL: acme.com/dashboard/settings => Folder: app/dashboard/settings/page.tsx를 참조하여 페이지를 구성한다.

### Pages and Layouts

#### Page 파일

- 파일은 tsx, jsx, js가 사용될 수 있다.
- page 파일이 없으면 사용자는 접근할 수 없다.
- page 파일은 오직 하나만 정의한다.
- 페이지는 기본적으로 서버 컴포넌트이다.
- 페이지 파일은 route subtree의 leaf여야 한다.

#### Layout 파일

- 최상위 레이아웃 파일을 "Root Layout"이라고 부른다.
  - 루트 레이아웃은 html과 body 태그를 포함한다.
- 어떤한 라우트 세크먼트든 경우에따라서 자신이 소유된 레아이아웃을 규정할 수 있다.
  이 레이아웃은 세그먼트 내부의 모든 페이지에 공유된다.
- 공유된 레이아웃 내부와 외부의 특정 라우트 세그먼트를 선택하기 위해 Route Groups를 사용할 수 있다.
- 레이아웃은 기본적으로 서버 컴포넌트이다.
- 상위 레이아웃과 해당 하위 레이아웃 간에 데이터를 전달할 수 없습니다.
- 경로에서 동일한 데이터를 두 번 이상 가져올 경우, 성능에 영향을 주지 않고 요청을 자동으로 중복 제거합니다.
- 네비게이션 과정에서 상태 및 상호작용이 유지되며 리랜더링되지 않는다.

- Layout은 현재 route segment에 접근을 가질 수 없습니다. route segments를 접근하기 위해선 Client Component 내부에서 useSelectedLayoutSegment, useSelectedLayoutSegments를 사용해야합니다.

- .js, .jsx, .tsx 확장자는 페이지로 사용될 수 있다.

#### Root Layout (Required)

- 최상위(app) 폴더에 위치한 layout 파일을 일컫는다.
- 필수적으로 존재해야한다.
- html, body 태그를 규정해야한다. (Next.js는 자동으로 해당 태그를 생성하지 않는다.)
- head 태그를 관리하기 위해서 **built-in SEO support**를 이용할 수 있다.
- 여러 root layouts을 생성하기 위해서 **route groups**을 사용할 수 있다.
- 기본적으로 서버 컴포넌트이다.

#### Templates 파일

- Templates는 layouts과 유사하게 각각 자식 layout 혹은 page를 감쌉니다.
- 경로에 결처 지속되고 상태를 유지하는 Layouts과 다르게 Templates는 navigation 중에 새로운 인스턴스를 생성합니다.
- 사용사례
  - css 혹은 애니메이션 라이브러리를 사용하여 애니메이션 시작 및 종료할 때
  - useEffect와 useState에 의존하는 기능들 (e.g a per-page feedback form)
  - layouts 내부 Suspense Boundaries는 레이아웃으 로드되고 페이지가 변경되지 않을때 한번 fallback을 보여준다. 템플릿에서 fallback은 각 navigation 마다 표시된다.

#### Modifying `<head>`

- import Metadata types and export metadata in Page or Layout file
- 매뉴얼적으로 <head> 및

```
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js',
}

export default function Page() {
  return '...'
}
```

### Linking and Navigating

- <Link> 는 <a>엘리먼드에 prefetching을 제공하기 위해 확장한 리액트 컴포넌트이다.

- [Linking to Dynamic Segments](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#linking-to-dynamic-segments)

- useRouter: Client Components 내부에서 경로를 동적으로 변경할 수 있도록 허용한다.

  - method: push(), refresh()...

- Soft Navigation: 변경된 세그먼트의 캐시는 재사용되고, 서버에 데이터를 새로 요청하지 않는 경우.

- Hard Navigation: 캐쉬는 무효회되고, 서버는 데이터를 refetch하고 변경된 세그먼트를 re-render한다.

- Soft Navigation 조건
  - 1. 내비게이팅이 이루어진 경로가 prefetch된 상태고, 동적 segments를 포함하지 않거나, 현재 경로와 동일한 동적 매개 변수를 가지는 경우

### Route Groups

- Convention: (folderName)

- Define: URL 구조에 영향을 주지 않고 route를 구성한다.

  - Ex. (marketing) -> about -> page.js의 url은 _/about_

- multiple root layouts: top-level에 layout.js를 제거하고 route group 내부에 여러 layout.js를 추가한다.

- Warning:
  - Navigating across multiple root layouts will cause a full page load (as opposed to a client-side navigation). For example, navigating from /cart that uses app/(shop)/layout.js to /blog that uses app/(marketing)/layout.js will cause a full page load. This only applies to multiple root layouts.
  - (marketing)/about/page.js and (shop)/about/page.js would both resolve to /about and cause an error.

### Intercepting Routes

- 현재 페이지 컨텍스트를 유지하면서 현재 레이아웃 안의 route를 불러오는 기능.

  - 예를들어서 피드의 사진을 클릭했을 때, 사진과 함께 피드를 오버레이하여 표시할 때 사용한다.
    - /feed 경로를 인터센트하고, 대신에 /photo/123을 보여주도록 URL을 가린다.
  - 하지만 사진 URL로 직접 이동하거나, 페이지를 새로고침할 경우, 전체 사진 페이지가 모달 대신 랜더링된다.
    - 경로 인터센트가 발생하지 않는다.

- 규칙 (..)

  - (.) to match segments on the same level
  - (..) to match segments one level above
  - (..)(..) to match segments two levels above
  - (...) to match segments from the root app directory

- 주의사항
  - (..) 규칙은 파일 시스템이 아닌, route 경로를 기반으로 합니다.

## Static and Dynamic

- 스태틱 경로 내부 컴포넌트틑 빌드 과정에서 서버에서 랜도된다. 작업 결과는 캐쉬되고, 지속적이 요청으로부터 재사용된다.
- 동적 경로 내부 컴포넌트는 요청 시, 서버에서 랜더링된다.

### Static Rendering (Default)

- 기본적으로 Next.js는 성능 개선을 위해서 정적으로 경로들을 랜더링한다. 이것은 랜더링 작업이 사전에 일어나고, 지리적으로 사용자에게 가까운 CDN으로부터 제공될 수 있습니다.

### Static Data Fetching (Default)

- 기본적으로 Next.js는 fetch() 요청 결과를 캐쉬합니다. (캐쉬 작업을 특별히 제거하지 않은 요청만)

  - 이것은 캐쉬 옵션을 따로 설정하지 않은 fetch 요청들은 force-cache 옵션을 사용할 것입니다.

- 만약에 경로에 revalidate 옵션을 사용하는 fetch 요청을 한다면 경로는 revalidation 동안 다시 정적으로 랜더링될 것입니다.

### Dynamic Rendering

- 정적 랜더랑 과정에서 만약 **동적 함수 혹은 동적 fetch 요청(no cache)** 이 발견된다면 Next.js는 요청 타임에 경로 전대를 동적으로 랜더링하도록 변경한다.

### Dynamic Functions

- 서버 컴포넌트에서 `cookies()`, `headers()` 사용하는 것은 요청 타입에 전체 경로를 동적 랜더링으로 선택합니다.

- 클라이언트 컴포넌트 내부 `useSearchParams()`를 사용하는 것은 static rendering을 생락하고, 클라이언트에서 가장 가까운 부모 Suspense 까지 모든 클라이언트 컴포넌트를 랜더링합니다.
  - `useSearchParams()` 사용하는 클라이언트 컴포넌트는 `<Suspense/>`로 바운더리로 감싸는 것을 권장한다.
    - 이것은 상위 클라이언트 컴포넌트를 정적으로 랜더링하도록할 수 있다.
- `searchParams` 페이지를 사용하는 것은 요청 타임에 페이지를 동적으로 랜더링하도록 선택합니다.

### Dynamic Data Fetching

- 캐시 옵션을 `no-store` `revalidate` to `0`로 설정하면 동적 데이터 페치를 발생시키낟.

- layout과 page에서 모든 fetch 요청들을 캐쉬하는 옵션은 `segment config` 오브젝트를 사용해서 설정될 수 있다.

## Edge and Node.js Runtimes

- Next.js 는 두개의 서버 런타임을 가진다.

  - Node.js Runtime
  - Edge Runtime

- app 디렉토리는 기본값으로 Node.js 런타임을 사용한다.

### Edge Runtime

- 작고 심플한 함수를 가지는 적은 지연시간인 동적이고 맞춤화된 컨텐츠를 전달하기에 이상적인 runtime이다.
- Vercel에서 Edge Runtime에서 실핸되는 코드는 1MB 에서 4MB 사이를 초과하지 않는다.

  - 이 제한선은 임포트된 패키미 및 폰트 파일 그리도 다양한 개발 인프라를 포함한다.

- 참고: Vercel: Next.js 개발팀에서 만든 프론트엔드 호스팅 사이트.

### Node.js Runtime

- Node.js Runtime을 사용하면 모든 Node.js API, npm packages를 사용할 수 있다.

- Edge 런타임을 사용하는 만큼 route 시작 속도가 빠르지 않습니다.

- Node.js 서버로 Next.js를 배포하는 것은 인프라의 managing, scaling, configuring을 필요로 할 것입니다.

### Serverless Node.js

- Edge Runtime 보다 더 복잡한 계산 부하를 처리할 수 있는 확장 가능한 솔루션이 필요할 때, 이상적이다.

- Vercel에 Serverless Functions와 함께하면 전체 코드 사이즈는 모든 packages, fonts, files포함하여 50MB이다.

- Edge를 사용하는 경로에 비해 단점은 Serverless Functions가 요청 처리를 시작하기 전에 부팅하는 데 수백 밀리초가 걸릴 수 있다.

### Segment Runtime Option

- runtime을 규저하기 위해서 다음과 같이 규정한다.

- app/page.tsx

```
export const runtime = 'edge' // 'nodejs' (default)
```

## Data Fetching

### Fetching

- Next.js는 async와 await로 함수를 기록함으로써 데이터를 직접 패치할 수 있습니다.

- Data fetching은 fet() Web API와 React Server Component 위에서 구축됩니다.

  - 중복된 요청은 자동으로 제거됩니다.

- Next.js는 각 요청에 caching, revalidating을 설정할 수 있도록 fetch options object를 확장합니다.

```
async function getData() {
  const res = await fetch('https://api.example.com/...')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()

  return <main></main>
}
```

- async Server Component를 TypeScript와 함께 사용하기 위해서 TypeScript는 5.1.3 혹은 높은 버전과 @types/react 18.2.8보다 높은 버전을 사용해야합니다.

- Next.js는 `cookies()`, `headers()` 함수를 제공합니다.

#### use in Client Components

- `use`는 await와 비슷한 개념으로 promise를 받는 새로운 React 함수입니다.

- `use`는 리턴된 promise를 다룹니다. [use RFC](https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md#usepromise).

- `use` 내부에 fetch를 감싸는 것은 Client Components에서 권장되지 않습니다. 만약 fetch가 필요하다면 SWR, React Query third-party 사용을 권장합니다.

#### Static Data Fetching

- 기본값으로 fetch는 자동으로 fetch하고 무기한으로 데이터를 캐시합니다.

- 시간 간격으로 캐시된 데이터를 revalidate하기 위해서 next.revalidate 옵션을 사용합니다.

```
fetch('https://...', { next: { revalidate: 10 } })
```

### Dynamic Data Fetching

- 매번 fetch 요청에서 fresh data를 패치하기 위해서 `cache: 'no-store'` 옵션을 사용합니다.

```
fetch('https://...', { cache: 'no-store' })
```

### Default Caching Behavior

- 만약 fetch를 사용하지 않고 다른 third party libraries를 사용한다면 route segment에 따라서 static or dynamic으로 cache여부가 결정됩니다.

- 만약 segment가 static이라면 요청 결괴는 캐쉬되고, 만약 설정했다면 revalidated될 것입니다.
- 만약 segment가 동적이라면 요청 결괴는 캐쉬도지 않으며 매요청마다 리패치될 것입니다.

- `cookies()`와 `header()`와 같은 동적 함수는 route segment를 동적으로 만듭니다.

### Caching

#### fetch()

- fetch를 사용하는 모든 요청들은 자동으로 캐쉬되고 중복이 제거됩니다.
  - 만약 동적 methods(`next/headers`, `export const POST`)가 사용E되고 fetch가 **POST (use Authorization or cookie header)**요청 이라면 캐시되지 않습니다.
  - `fetchCache`는 cache를 스킵하도록 규정됩니다.
  - 각 패치에`revalidate: 0` or `cache: no-store`가 규정된 경우

#### React cache()

- cache()는 중복을 제거하고 함수 호추로 감싸진 결괴를 memoizing합니다. 동일한 arguments로 호출된 함수는 캐쉬된 값을 재사용합니다.

```
import { cache } from 'react'

export const getUser = cache(async (id: string) => {
  const user = await db.user.findUnique({ id })
  return user
})
```

- 데이터의 중복이 자동으로 제거되기 때문에, 조회된 데이터를 props로 전달하지 않고, 동일 데이터를 각 컴포넌트에서 fetch하는 것을 권장합니다.

- client에서 절대 사용되지 안ㄷ호록 `server-only packge`사용을 권장합니다.

### POST request and cache()

- 위 post 요청에서 중복이 제거되지 않는 경우일 경우, cache 함수를 사용해서 중복을 제거할 수 있습니다.

```
import { cache } from 'react'

export const getUser = cache(async (id: string) => {
  const res = await fetch('...', { method: 'POST', body: '...' })
  // ...
})
```

### Preload pattern with cache()

- 정의: preload로 선언된 데이터를 우선적으로 서버에서 클라이언트로 로드한다.

- 사용 방법

```
import { getUser } from '@utils/getUser'

export const preload = (id: string) => {
  // void evaluates the given expression and returns undefined
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
  void getUser(id)
}
export default async function User({ id }: { id: string }) {
  const result = await getUser(id)
  // ...
}
```

- preload 함수의 이름은 어느것이든 될 수 있다.

- cache, preload, server-only 함께 사용하기.

```
import { cache } from 'react'
import 'server-only'

export const preload = (id: string) => {
  void getUser(id)
}

export const getUser = cache(async (id: string) => {
  // ...
})
```

## Revalidating Data

- 전체 사이트를 리빌드할 필요 없이 특정 정적 routes를 업데이트합니다.

  - Incremental Static Regeneration으로 알려진 기능.

- revalidation은 두 가지 타입이 존재한다.
  - 1. Background 특정 시간 간견으로 데이터를 revalidate
  - 2. update 같은 이벤트에 기반하여 데이터를 revalidate

### Background Revalidation

- 특정 간격으로 캐시된 데이터를 revalidate하기 위하여 next.revalidate 옵션을 사용할 수 있따.

```
fetch('https://...', { next: { revalidate: 60 } })
```

- fetch를 사용하지 않는 데이터를 revalidate하기 원한다면 route segment config를 사용할 수 있다.

```
export const revalidate = 60 // revalidate this page every 60 seconds
```

### On-demand Revalidation

- Next.js는 경로 및 캐시 태그에 기반하여 수요에 따라 컨텐트를 revalidating 합니다.

- cache tag 예시

```
export default async function Page() {
  const res = await fetch('https://...', { next: { tags: ['collection'] } })
  const data = await res.json()
  // ...
}
```

- 위 캐시된 데이터는 Route Handler 내부의 revalidateTag를 호출하면서 수요에 따라 revalidate 됩니다.

```
import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag')
  revalidateTag(tag)
  return NextResponse.json({ revalidated: true, now: Date.now() })
}
```

### Error Handling and Revalidation

- data revalidate 시도 중에 에러가 발생할 경우, 마지막으로 성공했던 생성된 데이터가 캐쉬로부터 제공됩니다.

- 추후 요청 과정에서 Next.js는 데이터 재요청을 시도할 것입니다.
