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
