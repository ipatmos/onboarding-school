# Google Sheet 간사 목록 저장 설정

이 웹앱은 간사 목록 중 `이름`, `부서`, `역할`, `상태`만 Google Sheet에 저장합니다. `PIN/비밀번호`는 Google Sheet로 보내지 않습니다.

## 1. Apps Script 코드 추가

현재 제출물 저장에 사용 중인 Google Apps Script 프로젝트를 엽니다.

`google-apps-script-users.gs` 파일 내용을 Apps Script 프로젝트에 추가합니다.

## 2. 기존 doGet/doPost에 연결

기존 코드에서 `action` 값을 읽은 직후 아래 처리를 추가합니다.

```js
const usersResult = handleUsersAction_(action, payload);
if (usersResult) return createJsonResponse_(usersResult, callback);
```

프로젝트의 응답 함수 이름이 `createJsonResponse_`가 아니라면, 기존 제출물 `list/review/delete`가 응답을 보내는 방식과 같은 방식으로 `usersResult`를 반환하면 됩니다.

## 3. 시트 탭

처음 저장할 때 `Users` 탭이 자동 생성됩니다.

열 구조는 다음과 같습니다.

```text
id | name | departmentId | roleId | status | updatedAt
```

## 4. 웹앱 반영 순서

1. GitHub의 `app.js`에 이번 수정본을 반영합니다.
2. Apps Script에 `google-apps-script-users.gs` 내용을 추가합니다.
3. Apps Script를 새 버전으로 배포합니다.
4. 웹앱 관리자 화면에서 간사를 추가하거나 수정합니다.
5. Google Sheet의 `Users` 탭에 간사 목록이 저장되는지 확인합니다.

## 주의

PIN은 각 브라우저의 기존 로컬 저장값을 유지합니다. 다른 컴퓨터에서 새로 접속한 간사는 기본 PIN `0000`으로 불러옵니다. 여러 컴퓨터에서 PIN까지 공유해야 한다면 별도 보안 기준을 정한 뒤 추가해야 합니다.