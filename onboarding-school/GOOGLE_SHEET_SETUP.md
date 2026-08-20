# Google Sheet 간사 목록 저장 설정

이 웹앱은 간사 목록의 `이름`, `부서`, `역할`, `상태`, `PIN`을 Google Sheet에 저장합니다.

## 시트 탭

처음 저장할 때 `Users` 탭이 자동 생성됩니다.

열 구조는 다음과 같습니다.

```text
id | name | departmentId | roleId | status | pin | updatedAt
```

## Apps Script 연결

`Code.gs`의 `doGet`에는 아래 코드가 들어가야 합니다.

```js
const usersResult = handleUsersAction_(action, params);
if (usersResult) {
  return jsonOutput(usersResult, callback);
}
```

`Code.gs`의 `doPost`에는 아래 코드가 들어가야 합니다.

```js
const usersResult = handleUsersAction_(body.action, body);
if (usersResult) {
  return jsonOutput(usersResult);
}
```

## 배포

Apps Script 저장 후 `배포 > 배포 관리 > 기존 배포 수정 > 버전: 새 버전 > 배포`를 해야 웹앱에서 적용됩니다.

## 주의

PIN이 Google Sheet에 그대로 저장됩니다. 이 시트는 관리자만 접근할 수 있도록 공유 권한을 제한하세요.