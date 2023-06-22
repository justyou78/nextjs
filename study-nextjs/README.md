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

### Page 파일

- .js, .jsx, .tsx 확장자는 페이지로 사용될 수 있다.

- 페이지는 기본적으로 서버 컴포넌트이다.

### Layout 파일

- 최상위 레이아웃 파일을 "Root Layout"이라고 부른다.
  루트 레이아웃은 html과 body 태그를 포함한다.

- 어떤한 라우트 세크먼트든 경우에따라서 자신이 소유된 레아이아웃을 규정할 수 있다.
  이 레이아웃은 세그먼트 내부의 모든 페이지에 공유된다.

- 공유된 레이아웃 내부와 외부의 특정 라우트 세그먼트를 선택하기 위해 Route Groups를 사용할 수 있다.

- 레이아웃은 기본적으로 서버 컴포넌트이다.

- 상위 레이아웃과 해당 하위 레이아웃 간에 데이터를 전달할 수 없습니다. 그러나 경로에서 동일한 데이터를 두 번 이상 가져올 수 있으며 React는 성능에 영향을 주지 않고 요청을 자동으로 중복 제거합니다.

- Layout은 현재 route segment에 접근을 가질 수 없습니다. route segments를 접근하기 위해선 Client Component 내부에서 useSelectedLayoutSegment, useSelectedLayoutSegments를 사용해야합니다.

- .js, .jsx, .tsx 확장자는 페이지로 사용될 수 있다.

### Templates 파일

- Templates는 layouts과 유사하게 각각 자식 layout 혹은 page를 감쌉니다.

- 템플릿은 탐색 시, 각 자식에 대해 새 인스턴스를 만듭니다. (layout처럼 경로간에 유지되고 상태가 유지되지 않는다. )

- 사용사례
  - css 혹은 애니메이션 라이브러리를 사용하여 애니메이션 시작 및 종료할 때
  - useEffect와 useState에 의존하는 기능들 (e.g a per-page feedback form)
  - layouts 내부 Suspense Boundaries는 레이아웃으 로드되고 페이지가 변경되지 않을때 한번 fallback을 보여준다. 템플릿에서 fallback은 각 navigation 마다 표시된다.

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
