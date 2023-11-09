# 코즈 쇼핑 Phase2. 검색화면 만들기 
리액트 쿼리 + 타입스크립트를 이용하여 검색 화면을 만듭니다.

## 명령어

### `npm start`

앱을 개발 모드로 실행합니다.
브라우저에서 http://localhost:3000을 열어 확인할 수 있습니다.

변경 사항이 있을 때 페이지가 새로고침됩니다.
또한 콘솔에서 ESLint 오류를 볼 수도 있습니다.

### `npm run build`

타입스크립트 빌드 실시합니다.

## 폴더 및 파일 구조
### `dist`
빌드 결과물이 위치 합니다.
### `src/query/*`
React-query 파일들이 위치 합니다. (useQuery / useMutation)
### `src/types/*`
타입스크립트 타입들이 위치 합니다.
### `eslintrc.js`
eslint + prettier 설정이 위치 합니다.
자세한 설정은 'rules'를 참고 하세요. 

## CSS
기본으로 tailwind css가 적용되어 있습니다.
하지만, 기본 css 혹은 다른 css 방식을 사용 해도 무관 합니다.