# GraphQL API

이 프로젝트는 GraphQL, Apollo Server, Express를 사용하여 만든 간단한 API입니다. GraphQL 서버를 설정하고, 타입과 리졸버를 정의하며, 쿼리와 뮤테이션을 수행하는 방법을 보여줍니다.

## 기능

- **GraphQL**: 스키마 정의 및 API 요청 처리.
- **Apollo Server**: GraphQL 서버 실행.
- **Express**: 웹 서버 설정.

## 쿼리 및 뮤테이션

### 쿼리

- `posts`: 모든 게시물 목록을 반환.
- `post(id: ID!)`: ID로 특정 게시물을 반환.
- `comments`: 모든 코멘트 목록을 반환
- `comments(min: Lieks!)` : 최소 좋아요 수로 코멘트 반환

### 뮤테이션

- `addNewPost(id: ID!, title: String!, description: String!)`: 주어진 ID, 제목, 설명으로 새 게시물을 추가.

## 프로젝트 구조

- `server.js`: 서버의 진입점.
- `posts.graphql`: 게시물에 대한 GraphQL 스키마 정의.
- `posts.model.js`: 데이터 및 게시물 관리를 위한 함수 포함.
- `posts.resolvers.js`: GraphQL 스키마에 대한 리졸버 정의.
