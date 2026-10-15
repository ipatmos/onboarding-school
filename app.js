const STORAGE_KEY = "onboarding-school-secure-v1";
const SESSION_KEY = "onboarding-session-secure-v1";
const DATA_VERSION = "20260630-1605";
const SHEET_API_URL = "https://script.google.com/macros/s/AKfycbzosPkWStMnym-kJYvKVrlv5_2q5kCFEar1xLFXj_UIB-L6rHShd1PAlIgK7o_x01aw/exec";
const ONBOARDING_PURPOSE = "새롭게 섹션A의 식구가 된 간사가 본격적인 실무에 들어가기 전에 업무를 수행하는데 있어서 필요한 공동체 이해, 직무 수행에 필요한 기초 역량 강화, 담당하게 될 업무 사전준비를 통해 조기 적응력을 가속화시켜 주어진 업무를 정직하고 책임감 있는 자세로 열정을 다해 수행하도록 돕기 위한 과정입니다.";

const seed = {
  departments: [
    { id: "all", name: "전체" },
    { id: "yekko", name: "예꼬클럽" },
    { id: "holy", name: "홀리키즈" },
    { id: "design", name: "디자인" },
  ],
  roles: [
    { id: "all", name: "전체" },
    { id: "edit", name: "편집" },
    { id: "write", name: "교재 집필" },
    { id: "design", name: "디자인" },
  ],
  users: [
    { id: "u1", name: "나현영", departmentId: "holy", roleId: "edit", status: "신입", pin: "" },
  ],
  contents: [
    { id: "C001", part: "파트 1. 공동체 이해", title: "내규와 생활수칙 확인", type: "문서", dept: "all", role: "all", order: 1, minutes: 30, url: "https://drive.google.com/drive/folders/1IBzMMxVg9wDus_ll5mewSa4vddbElHms?usp=drive_link", description: "구글드라이브에 공유된 내규와 생활수칙 문서를 읽고 확인합니다. 이해되지 않는 부분이 있으면 질문을 남깁니다." },
    { id: "C002", part: "파트 1. 공동체 이해", title: "팻머스 홈페이지 분석", type: "리포트", dept: "all", role: "all", order: 2, minutes: 60, url: "https://www.ipatmos.co.kr/", description: "홈페이지에서 비전, 미션, 핵심 가치, 사역, 구조를 분석하고 개선 아이디어를 작성합니다." },
    { id: "C003", part: "파트 2-1. 영상 강의", title: "문화와 다중지능", type: "영상", dept: "all", role: "all", order: 3, minutes: 80, url: "https://youtu.be/q-Jt3iEsAAg?si=gGV4zB2VPZS9HKw8\nhttps://youtu.be/R8x8H3wL4SQ?si=slu6znXOPpaHssgh", description: "강의를 시청하고 요약문과 업무 적용점을 제출합니다." },
    { id: "C004", part: "파트 2-1. 영상 강의", title: "2026년 커리큘럼 주제 해설", type: "영상", dept: "all", role: "all", order: 4, minutes: 20, url: "https://youtu.be/aYhICtXmcRg?si=ctfqZjvDmeDJ2tZB", description: "2026년 커리큘럼의 방향과 주제를 이해하고 요약문을 제출합니다." },
    { id: "C005", part: "파트 2-1. 영상 강의", title: "2026년 홀리키즈 커리큘럼 강의", type: "영상", dept: "holy", role: "all", order: 5, minutes: 20, url: "https://vimeo.com/1135642764/00dd514323", description: "홀리키즈 간사를 위한 부서별 커리큘럼 강의입니다." },
    { id: "C006", part: "파트 2-1. 영상 강의", title: "홀리키즈 예배 시연", type: "영상", dept: "holy", role: "all", order: 6, minutes: 50, url: "https://youtu.be/NAwf9LOeQHY", description: "예배 시연을 보고 예배 흐름과 개선점을 분석합니다." },
    { id: "C007", part: "파트 2-1. 영상 강의", title: "홀리키즈 예배 강의", type: "영상", dept: "holy", role: "all", order: 7, minutes: 30, url: "https://vimeo.com/1135642375/0d9767e9d3", description: "홀리키즈 예배의 순서의 구조를 이해합니다." },
    { id: "C008", part: "파트 2-1. 영상 강의", title: "홀리키즈 공과 강의", type: "영상", dept: "holy", role: "all", order: 8, minutes: 30, url: "https://vimeo.com/1135641979/794a00f42f", description: "홀리키즈 공과의 순서의 구조를 이해합니다." },
    { id: "C009", part: "파트 2-1. 영상 강의", title: "2026년 예꼬클럽 커리큘럼 강의", type: "영상", dept: "yekko", role: "all", order: 9, minutes: 20, url: "https://vimeo.com/1135626198/04e827f827", description: "예꼬클럽 간사를 위한 부서별 커리큘럼 강의입니다." },
    { id: "C010", part: "파트 2-1. 영상 강의", title: "예꼬클럽 예배 강의", type: "영상", dept: "yekko", role: "all", order: 10, minutes: 40, url: "https://vimeo.com/1135627565/2cafe4ba52", description: "예꼬클럽 간사를 위한 예배 강의입니다." },
    { id: "C011", part: "파트 2-1. 영상 강의", title: "예꼬클럽 공과 강의", type: "영상", dept: "yekko", role: "all", order: 11, minutes: 30, url: "https://vimeo.com/1135626198/04e827f827", description: "예꼬클럽 간사를 위한 아이라이크 공과 강의입니다." },
    { id: "C012", part: "파트 2-2. 독서 과제", title: "지력혁명", type: "독서", dept: "all", role: "all", order: 12, minutes: 179, url: "", description: "다중지능 이해를 돕는 입문서입니다. (독서 과제는 업무 외 시간에 진행합니다.)" },
    { id: "C013", part: "파트 2-2. 독서 과제", title: "하이테크 예배", type: "독서", dept: "all", role: "all", order: 13, minutes: 180, url: "", description: "예배와 기술의 관계를 읽고 사역 적용점을 정리합니다. (독서 과제는 업무 외 시간에 진행합니다.)" },
    { id: "C014", part: "파트 2-2. 독서 과제", title: "빨려드는 어린이 설교", type: "독서", dept: "all", role: "all", order: 14, minutes: 180, url: "", description: "설교에서의 오브젝트 레슨의 이해를 돕습니다." },
    { id: "C015", part: "파트 2-2. 독서 과제", title: "예배 갱신의 사각지대 교회학교 예배", type: "독서", dept: "all", role: "all", order: 15, minutes: 180, url: "", description: "교회학교 예배에 대한 문제 제기 및 연령별 예배의 대안 제시" },
  ],
  progress: {},
  submissions: [],
  submissionDriveUrl: "https://drive.google.com/drive/folders/1eKBCV2TbClFEXYCqlnQQo4Feh9QvXfN4?usp=drive_link",
  dataVersion: DATA_VERSION,
};
let state = normalizeState(loadState());
let session = loadSession();
let currentUserId = session?.role === "trainee" ? session.userId : state.users[0]?.id;
let activeView = "dashboard";
let loginUsers = [];

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("onboarding-school-v2");
  if (!saved) return structuredClone(seed);
  try {
    const parsed = JSON.parse(saved);
    return { ...structuredClone(seed), ...parsed, submissions: [], progress: {} };
  }
  catch { return structuredClone(seed); }
}
function normalizeState(nextState) {
  for (const key of ["departments", "roles"]) {
    const savedOptions = Array.isArray(nextState[key]) ? nextState[key] : [];
    nextState[key] = structuredClone(seed[key]);
    for (const option of savedOptions) {
      if (!option?.id || !String(option.name || "").trim()) continue;
      if (!nextState[key].some(item => item.id === option.id)) {
        nextState[key].push({ id: String(option.id), name: String(option.name).trim() });
      }
    }
  }
  nextState.users = (nextState.users || []).map((u, index) => ({
    id: u.id,
    name: u.name,
    departmentId: u.departmentId,
    roleId: u.roleId,
    status: u.status || "훈련 중",
    pin: "",
  }));
  let contentIdCounter = (nextState.contents || []).reduce((max, c) => {
    const match = String(c.id || "").match(/^C(\d+)$/);
    return match ? Math.max(max, Number(match[1])) : max;
  }, 0);
  const usedContentIds = new Set();
  nextState.contents = (nextState.contents || []).map(c => {
    let id = String(c.id || "").trim();
    if (!id || usedContentIds.has(id)) {
      do { contentIdCounter += 1; id = `C${String(contentIdCounter).padStart(3, "0")}`; }
      while (usedContentIds.has(id));
    }
    usedContentIds.add(id);
    const normalized = {
      ...c,
      id,
      title: String(c.title || "").replaceAll("예꼬마을", "예꼬클럽"),
      description: String(c.description || "").replaceAll("예꼬마을", "예꼬클럽"),
    };
    return normalized;
  });
  nextState.progress ||= {};
  nextState.parts = [...new Set([
    ...(Array.isArray(nextState.parts) ? nextState.parts : []),
    ...nextState.contents.map(content => content.part),
  ].filter(part => typeof part === "string" && part.trim()).map(part => part.trim()))];
  nextState.submissions ||= [];
  nextState.submissionDriveUrl = nextState.submissionDriveUrl || "";
  nextState.dataVersion = DATA_VERSION;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...nextState, users: [], submissions: [], progress: {} }));
  return nextState;
}
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, users: [], submissions: [], progress: {} }));
    if (isAdmin() && session?.token) scheduleConfigSave();
    return true;
  } catch (error) {
    alert("브라우저 저장소에 저장하지 못했습니다. 저장 공간 또는 브라우저 설정을 확인해 주세요.");
    return false;
  }
}
function showAdminSaved(message = "저장되었습니다.") {
  const notice = document.getElementById("adminSaveNotice");
  if (!notice) return;
  notice.textContent = message;
  notice.classList.add("show");
  window.clearTimeout(showAdminSaved.timer);
  showAdminSaved.timer = window.setTimeout(() => notice.classList.remove("show"), 2200);
}
function loadSession() {
  try { return JSON.parse(sessionStorage.getItem(SESSION_KEY)); }
  catch { return null; }
}
function saveSession(value) { sessionStorage.setItem(SESSION_KEY, JSON.stringify(value)); }
function clearSession() { sessionStorage.removeItem(SESSION_KEY); session = null; }
function $(id) { return document.getElementById(id); }
function isAdmin() { return Boolean(session?.token && session?.role === "admin"); }
function currentUser() { return state.users.find(u => u.id === currentUserId) || state.users[0]; }
function deptName(id) {
  if (Array.isArray(id)) return id.map(deptName).join(", ");
  return state.departments.find(d => d.id === id)?.name || id;
}
function contentDepartments(value) {
  const ids = Array.isArray(value) ? value : [value || "all"];
  return ids.includes("all") ? ["all"] : [...new Set(ids)];
}
function departmentChoices(value) {
  const selected = contentDepartments(value);
  return state.departments.map(dept => `<label><input type="checkbox" value="${escapeHtml(dept.id)}" ${selected.includes(dept.id) ? "checked" : ""} onchange="changeDepartmentChoice(this)" /><span>${escapeHtml(dept.name)}</span></label>`).join("");
}
function readDepartments(container) {
  const selected = Array.from(container.querySelectorAll('input:checked'), input => input.value);
  return contentDepartments(selected.length ? selected : "all");
}
function changeDepartmentChoice(input) {
  const container = input.closest(".department-choices");
  if (input.checked) {
    container.querySelectorAll("input").forEach(other => {
      if (input.value === "all" || other.value === "all") {
        if (other !== input) other.checked = false;
      }
    });
  }
  if (!container.querySelector("input:checked")) container.querySelector('input[value="all"]').checked = true;
}
function roleName(id) { return state.roles.find(r => r.id === id)?.name || id; }
function getProgress(userId, contentId) { return state.progress[`${userId}:${contentId}`] || { status: "미시작" }; }
function isComplete(status) { return ["완료", "통과"].includes(status); }
function isReadyForNext(status) { return ["완료", "통과", "검토 중", "제출 완료"].includes(status); }
function setProgress(userId, contentId, data) { state.progress[`${userId}:${contentId}`] = { ...getProgress(userId, contentId), ...data }; saveState(); }
function getAssignedContents(u = currentUser()) {
  return state.contents
    .filter(c => (contentDepartments(c.dept).includes("all") || contentDepartments(c.dept).includes(u.departmentId)) && (c.role === "all" || c.role === u.roleId))
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, "ko"));
}
function canAccess(content, assigned = getAssignedContents()) {
  const target = assigned.find(c => c === content) || assigned.find(c => c.id === content.id);
  if (!target) return false;
  const partOrder = [...new Set(assigned.map(c => c.part))];
  const partIndex = partOrder.indexOf(target.part);
  if (partIndex <= 0) return true;
  const previousParts = new Set(partOrder.slice(0, partIndex));
  return assigned
    .filter(c => previousParts.has(c.part))
    .every(c => isReadyForNext(getProgress(currentUserId, c.id).status));
}
function statusBadge(status, locked = false) {
  if (locked) return `<span class="badge lock">잠김</span>`;
  if (["통과", "완료"].includes(status)) return `<span class="badge ok">${status}</span>`;
  if (["보완 요청", "검토 중", "제출 완료"].includes(status)) return `<span class="badge warn">${status}</span>`;
  if (status === "반려") return `<span class="badge danger">${status}</span>`;
  return `<span class="badge">${status}</span>`;
}
function linkLabel(content) {
  const url = content.url || "";
  if (url.includes("drive.google.com") || url.includes("docs.google.com")) return "구글드라이브 문서 열기";
  if (content.type === "영상") return "영상 링크 열기";
  return "자료 링크 열기";
}
function contentLinks(url = "") {
  return String(url || "")
    .split(/[\s,]+/)
    .map(link => link.trim())
    .filter(link => /^https?:\/\//i.test(link));
}
function resourceButtons(content) {
  const links = contentLinks(content.url || "");
  if (!links.length) return `<p class="muted">관리자가 문서 링크를 등록하면 여기에 표시됩니다.</p>`;
  return `<div class="resource-link-row">${links.map((link, index) => `<button class="resource-link" type="button" data-resource-url="${escapeHtml(link)}" onclick="openExternalResource(this.dataset.resourceUrl)">${linkLabel(content)}${links.length > 1 ? ` ${index + 1}` : ""}</button>`).join("")}</div>`;
}
function videoEmbedUrl(url = "") {
  const value = url.trim();
  if (!value) return "";
  try {
    const parsed = new URL(value);
    const host = parsed.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id ? `https://www.youtube.com/embed/${id}` : "";
    }
    if (host.endsWith("youtube.com")) {
      const id = parsed.searchParams.get("v") || parsed.pathname.match(/\/(shorts|embed)\/([^/?#]+)/)?.[2];
      return id ? `https://www.youtube.com/embed/${id}` : "";
    }
    if (host.endsWith("vimeo.com")) {
      const id = parsed.pathname.split("/").filter(Boolean).find(part => /^\d+$/.test(part));
      return id ? `https://player.vimeo.com/video/${id}` : "";
    }
  } catch {
    return "";
  }
  return "";
}
function videoPlayer(content) {
  const embeds = contentLinks(content.url || "")
    .map(link => videoEmbedUrl(link))
    .filter(Boolean);
  if (embeds.length) {
    return `<div class="video-stack">${embeds.map((embedUrl, index) => `<div class="video-frame"><iframe src="${escapeHtml(embedUrl)}" title="${escapeHtml(content.title)} ${index + 1}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`).join("")}</div>`;
  }
  return `<div class="video-placeholder"><div><strong>영상 강의 영역</strong><br><span>유튜브나 비메오 링크를 입력하면 이곳에 첫 화면이 표시됩니다.</span></div></div>`;
}
function openExternalResource(url) {
  const newWindow = window.open(url, "_blank");
  if (newWindow) {
    newWindow.opener = null;
    return;
  }
  alert("새 창이 차단되었습니다. 브라우저의 팝업 허용 설정을 확인해 주세요.");
}
function getStats(u = currentUser()) {
  const assigned = getAssignedContents(u);
  const completed = assigned.filter(c => isComplete(getProgress(u.id, c.id).status)).length;
  const byPart = {};
  assigned.forEach(c => {
    byPart[c.part] ||= { total: 0, done: 0 };
    byPart[c.part].total += 1;
    if (isComplete(getProgress(u.id, c.id).status)) byPart[c.part].done += 1;
  });
  return { total: assigned.length, completed, percent: assigned.length ? Math.round(completed / assigned.length * 100) : 0, byPart };
}
function escapeHtml(value = "") {
  return String(value).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
}

function renderLoginOptions() {
  const accounts = loginUsers.length ? loginUsers : state.users;
  $("loginAccount").innerHTML = `<option value="admin">관리자</option>` + accounts.map(u => `<option value="${escapeHtml(u.id)}">${escapeHtml(u.name)}</option>`).join("");
}
async function handleLogin(event) {
  event.preventDefault();
  const account = $("loginAccount").value;
  const password = $("loginPassword").value.trim();
  const button = event.target.querySelector('button[type="submit"]');
  if (button) button.disabled = true;
  try {
    const result = await sheetJsonp({ action: "login", account, password });
    session = result.session;
    currentUserId = session.role === "admin" ? state.users[0]?.id : session.userId;
    activeView = session.role === "admin" ? "admin" : "dashboard";
    if (result.config) applyRemoteConfig(result.config);
    state.users = result.users.map(remoteUserToLocal);
    if (session.role === "admin") currentUserId = state.users[0]?.id;
    state.submissions = [];
    state.progress = {};
    saveSession(session);
    saveState();
    $("loginPassword").value = "";
    showApp();
  } catch (error) {
    showLoginError(error.message || "로그인에 실패했습니다.");
  } finally { if (button) button.disabled = false; }
}
function showLoginError(message) { $("loginError").textContent = message; }
async function resumeServerSession() {
  try {
    const submissions = await sheetJsonp({ action: "list" });
    const accounts = await sheetJsonp({ action: "users-list" });
    if (submissions.config) applyRemoteConfig(submissions.config);
    state.users = accounts.users.map(remoteUserToLocal);
    state.submissions = submissions.submissions.map(remoteSubmissionToLocal);
    state.progress = {};
    refreshProgressFromSubmissions();
    currentUserId = isAdmin() ? state.users[0]?.id : session.userId;
    activeView = isAdmin() ? "admin" : "dashboard";
    lastSheetSyncAt = Date.now();
    saveState();
    showApp();
  } catch (error) {
    clearSession();
    showLogin();
    showLoginError(error.message);
    syncRemoteUsers({ silent: true });
  }
}
function showApp() {
  $("loginScreen").classList.add("hidden");
  $("appShell").classList.remove("hidden");
  renderAll();
  switchView(isAdmin() ? activeView : "dashboard");
}
function showLogin() {
  renderLoginOptions();
  $("loginScreen").classList.remove("hidden");
  $("appShell").classList.add("hidden");
  $("loginError").textContent = "";
}
function logout() {
  if (session?.token) sheetJsonp({ action: "logout" }).catch(() => {});
  clearSession();
  state.submissions = [];
  state.progress = {};
  state.users = [];
  currentUserId = state.users[0]?.id;
  showLogin();
}
function renderSessionCard() {
  if (isAdmin()) {
    $("sessionCard").innerHTML = `<p class="eyebrow">관리자 모드</p><h3>관리자</h3><p class="muted">훈련 과정, 간사, 제출물을 관리합니다.</p><button class="ghost logout-btn" onclick="logout()">로그아웃</button>`;
  } else {
    const u = currentUser();
    $("sessionCard").innerHTML = `<p class="eyebrow">현재 사용자</p><h3>${u.name}</h3><p class="muted">${deptName(u.departmentId)} · ${roleName(u.roleId)} · ${u.status}</p><button class="ghost logout-btn" onclick="logout()">로그아웃</button>`;
  }
  document.querySelectorAll(".admin-only").forEach(el => el.classList.toggle("hidden", !isAdmin()));
}

function landingStatus(percent) {
  if (percent >= 100) return "착륙 완료";
  if (percent >= 75) return "최종 접근";
  if (percent >= 45) return "활주로 접근 중";
  if (percent > 0) return "하강 준비";
  return "이륙 전 점검";
}
function renderLandingProgress(stats) {
  const percent = Math.max(0, Math.min(100, stats.percent || 0));
  const planeY = Math.round(22 + percent * 0.52);
  const flare = percent >= 92 ? " landing-plane--touchdown" : "";
  return `<div class="card landing-card"><div class="stat"><div><p class="eyebrow">전체 진행률</p><strong>${percent}%</strong></div><span class="badge ok">${stats.completed}/${stats.total}</span></div><div class="landing-scene" style="--plane-x:${percent}%;--plane-y:${planeY}px"><div class="glide-path"></div><div class="landing-plane${flare}" aria-hidden="true"><span class="plane-body"></span><span class="plane-wing"></span><span class="plane-tail"></span></div><div class="runway"><span></span><span></span><span></span><span></span></div></div><div class="landing-caption"><strong>${landingStatus(percent)}</strong><span>${percent >= 100 ? "모든 필수 과정이 완료되었습니다." : "과정을 마칠수록 활주로에 가까워집니다."}</span></div></div>`;
}
function renderDashboard() {
  const u = currentUser();
  const stats = getStats(u);
  const assigned = getAssignedContents(u);
  const next = assigned.find(c => !isReadyForNext(getProgress(u.id, c.id).status));
  const parts = Object.entries(stats.byPart).map(([part, p]) => {
    const percent = Math.round(p.done / p.total * 100);
    return `<div class="card"><div class="stat"><div><p class="eyebrow">${part}</p><h3>${p.done}/${p.total}</h3></div><span class="badge">${percent}%</span></div><div class="progress-bar"><div class="progress-fill" style="width:${percent}%"></div></div></div>`;
  }).join("");
  $("dashboardView").innerHTML = `<div class="card purpose-card"><p class="eyebrow">개요와 목적</p><h3>온보딩 과정 안내</h3><p>${ONBOARDING_PURPOSE}</p></div><div class="grid cols-3">${renderLandingProgress(stats)}<div class="card"><p class="eyebrow">부서 / 역할</p><h3>${deptName(u.departmentId)} · ${roleName(u.roleId)}</h3><p class="muted">내 계정에 배정된 훈련 콘텐츠만 표시됩니다.</p></div><div class="card"><p class="eyebrow">다음 과제</p><h3>${next ? next.title : "모든 필수 과제 완료"}</h3>${next ? `<button class="primary" onclick="openContentByIndex('${state.contents.indexOf(next)}')">시작하기</button>` : `<span class="badge ok">수료 가능</span>`}</div></div><div class="section-title"><h3>파트별 진행 현황</h3></div><div class="grid cols-2">${parts}</div>`;
}
function renderCourses() {
  const assigned = getAssignedContents();
  const grouped = assigned.reduce((acc, c) => { acc[c.part] ||= []; acc[c.part].push(c); return acc; }, {});
  $("coursesView").innerHTML = Object.entries(grouped).map(([part, contents]) => `<div class="section-title"><h3>${part}</h3><span class="badge">${contents.length}개 과정</span></div><div class="course-list">${contents.map(c => courseCard(c, assigned)).join("")}</div>`).join("");
}
function courseCard(c, assigned) {
  const progress = getProgress(currentUserId, c.id);
  return `<article class="course-card"><div><h4>${c.title}</h4><p>${c.description}</p><div class="meta-row"><span class="badge">${c.type}</span><span class="badge">${deptName(c.dept)}</span><span class="badge">${roleName(c.role)}</span><span class="badge">약 ${c.minutes}분</span>${statusBadge(progress.status)}</div></div><button class="primary" onclick="openContentByIndex('${state.contents.indexOf(c)}')">열기</button></article>`;
}
function renderSubmissions() {
  const subs = state.submissions.filter(s => s.userId === currentUserId).sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt));
  $("submissionsView").innerHTML = `<div class="card"><h3>나의 제출함</h3>${subs.length ? `<div class="table-wrap"><table><thead><tr><th>과제</th><th>제출일</th><th>상태</th><th>피드백</th></tr></thead><tbody>${subs.map(s => { const c = state.contents.find(x => x.id === s.contentId); return `<tr><td><strong>${c?.title || s.contentId}</strong><br><span class="muted">${c?.type || ""}</span></td><td>${formatDate(s.createdAt)}</td><td>${statusBadge(s.status)}</td><td>${s.feedback || "-"}</td></tr>`; }).join("")}</tbody></table></div>` : `<div class="empty">아직 제출한 과제가 없습니다.</div>`}</div>`;
}
function optionTags(items, selected) { return items.map(item => `<option value="${item.id}" ${item.id === selected ? "selected" : ""}>${item.name}</option>`).join(""); }
function typeOptions(selected) { return ["문서", "영상", "독서", "리포트", "실습"].map(type => `<option ${type === selected ? "selected" : ""}>${type}</option>`).join(""); }
function nextContentId() {
  const numbers = state.contents.map(c => Number(String(c.id || "").replace(/^C/, ""))).filter(Number.isFinite);
  let next = Math.max(0, ...numbers) + 1;
  let id = `C${String(next).padStart(3, "0")}`;
  while (state.contents.some(c => c.id === id)) {
    next += 1;
    id = `C${String(next).padStart(3, "0")}`;
  }
  return id;
}
function sheetJsonp(params = {}) {
  return new Promise((resolve, reject) => {
    const requestId = crypto.randomUUID();
    const frame = document.createElement("iframe");
    frame.name = `request_${requestId}`;
    frame.hidden = true;
    const form = document.createElement("form");
    form.method = "POST";
    form.action = SHEET_API_URL;
    form.target = frame.name;
    form.hidden = true;
    const input = document.createElement("input");
    input.name = "payload";
    input.value = JSON.stringify({ ...params, sessionToken: session?.token || "", requestId, callerOrigin: location.origin });
    form.appendChild(input);
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error("Google Sheet 응답 시간이 초과되었습니다."));
    }, 45000);
    function cleanup() {
      window.clearTimeout(timeout);
      window.removeEventListener("message", receive);
      form.remove();
      frame.remove();
    }
    function receive(event) {
      let host;
      try { host = new URL(event.origin).hostname; } catch { return; }
      const trustedHost = host === "script.google.com" || host === "script.googleusercontent.com" || host.endsWith(".googleusercontent.com");
      if (!trustedHost || !event.origin.startsWith("https://") || event.data?.requestId !== requestId) return;
      cleanup();
      const result = event.data.result;
      if (!result?.ok) {
        if (result?.code === "UNAUTHORIZED") { clearSession(); showLogin(); }
        reject(new Error(result?.error || "요청을 처리하지 못했습니다."));
      } else resolve(result);
    }
    window.addEventListener("message", receive);
    document.body.append(frame, form);
    form.submit();
  });
}
function configForSheet() {
  return { contents: state.contents, parts: trainingParts(), departments: state.departments, roles: state.roles,
    submissionDriveUrl: state.submissionDriveUrl, submissionCourseOverrides: state.submissionCourseOverrides || {},
    submissionTitleOverrides: state.submissionTitleOverrides || {} };
}
function applyRemoteConfig(config) {
  for (const key of ["contents", "parts", "departments", "roles", "submissionDriveUrl", "submissionCourseOverrides", "submissionTitleOverrides"]) {
    if (config[key] !== undefined) state[key] = config[key];
  }
}
let configSaveTimer;
function scheduleConfigSave() {
  window.clearTimeout(configSaveTimer);
  configSaveTimer = window.setTimeout(async () => {
    if (!isAdmin()) return;
    try { await sheetJsonp({ action: "config-save", config: configForSheet() }); }
    catch (error) { alert(`설정을 서버에 저장하지 못했습니다: ${error.message}`); }
  }, 800);
}
function remoteSubmissionToLocal(item) {
  const user = state.users.find(u => u.id === item.userId || u.name === item.userName);
  const content = state.contents.find(c => c.id === item.contentId || c.title === item.contentTitle);
  return {
    id: item.id,
    userId: user?.id || item.userId || "",
    userName: item.userName || user?.name || "",
    department: item.department || user?.departmentId || "",
    role: item.role || user?.roleId || "",
    contentId: state.submissionCourseOverrides?.[item.id] || item.contentId || content?.id || "",
    contentTitle: state.submissionTitleOverrides?.[item.id] || item.contentTitle || content?.title || "",
    answers: item.answers || {},
    status: item.status || "검토 중",
    feedback: item.feedback || "",
    createdAt: item.createdAt || new Date().toISOString(),
    reviewedAt: item.reviewedAt || "",
  };
}
function refreshProgressFromSubmissions() {
  state.submissions.forEach(s => {
    if (!s.userId || !s.contentId) return;
    const key = `${s.userId}:${s.contentId}`;
    const current = state.progress[key] || { status: "미시작" };
    state.progress[key] = {
      ...current,
      status: s.status || current.status,
      submittedAt: s.createdAt || current.submittedAt,
      completedAt: s.status === "통과" ? (s.reviewedAt || s.createdAt || current.completedAt) : undefined,
    };
  });
}
let sheetSyncInFlight = false;
let lastSheetSyncAt = 0;
async function syncRemoteSubmissions({ silent = false } = {}) {
  if (!session?.token || sheetSyncInFlight) return;
  sheetSyncInFlight = true;
  try {
    const result = await sheetJsonp({ action: "list" });
    if (result.config) applyRemoteConfig(result.config);
    if (!result?.ok) throw new Error(result?.error || "제출물 목록을 불러오지 못했습니다.");
    state.submissions = (result.submissions || []).map(remoteSubmissionToLocal);
    refreshProgressFromSubmissions();
    lastSheetSyncAt = Date.now();
    saveState();
    renderAll();
    switchView(isAdmin() ? "admin" : activeView);
    if (!silent && isAdmin()) showAdminSaved("구글 시트 제출물을 불러왔습니다.");
  } catch (error) {
    if (!silent) alert(error.message || "구글 시트 연결에 실패했습니다.");
  } finally {
    sheetSyncInFlight = false;
  }
}
function submitToSheet(submission) {
  return sheetJsonp({ action: "submit", submission });
}
async function reviewSubmissionOnSheet(submissionId, status, feedback) {
  if (!SHEET_API_URL) return;
  await sheetJsonp({ action: "review", id: submissionId, status, feedback });
}
async function deleteSubmissionOnSheet(submissionId) {
  if (!SHEET_API_URL) return;
  await sheetJsonp({ action: "delete", id: submissionId });
}
function remoteUserToLocal(item, index = 0) {
  const localUser = state.users.find(u => u.id === item.id || u.name === item.name);
  return {
    id: item.id || `u_remote_${Date.now()}_${index}`,
    name: item.name || "이름 없음",
    departmentId: item.departmentId || item.department || "holy",
    roleId: item.roleId || item.role || "edit",
    status: item.status || "훈련 중",
    pin: "",
  };
}
function usersForSheet() {
  return state.users.map((u, index) => ({
    id: u.id || `u_${index + 1}`,
    name: u.name || "",
    departmentId: u.departmentId || "holy",
    roleId: u.roleId || "edit",
    status: u.status || "훈련 중",
    pin: u.pin || "",
  }));
}
async function saveUsersToSheet() {
  try {
    await sheetJsonp({ action: "users-save", users: usersForSheet() });
    state.users.forEach(user => { user.pin = ""; });
    return true;
  } catch (error) { alert(error.message); return false; }
}
let userSyncInFlight = false;
async function syncRemoteUsers({ silent = false, rerender = true } = {}) {
  if (!SHEET_API_URL || userSyncInFlight) return;
  userSyncInFlight = true;
  try {
    const result = await sheetJsonp({ action: "users-list" });
    if (!result?.ok) throw new Error(result?.error || "간사 목록을 불러오지 못했습니다.");
    if (!session?.token) {
      loginUsers = result.users || [];
      renderLoginOptions();
      return;
    }
    const remoteUsers = Array.isArray(result.users) ? result.users.map(remoteUserToLocal).filter(u => u.name.trim()) : [];
    if (remoteUsers.length) {
      state.users = remoteUsers;
      if (!state.users.some(u => u.id === currentUserId)) currentUserId = state.users[0]?.id;
      saveState();
      renderLoginOptions();
      if (rerender && session) renderAll();
    }
    if (!silent && isAdmin()) showAdminSaved("간사 목록을 Google Sheet에서 불러왔습니다.");
  } catch (error) {
    if (!silent) alert(error.message || "간사 목록 Google Sheet 연결에 실패했습니다.");
  } finally {
    userSyncInFlight = false;
  }
}
function answerLabel(key) {
  return {
    confirmed: "완료 여부",
    watched: "완료 여부",
    read: "완료 여부",
    summary: "요약 또는 리포트",
    learned: "새롭게 배운 점",
    apply: "업무 적용점",
    question: "질문",
    understanding: "이해도",
    impressive: "인상 깊었던 내용",
    fileUrl: "업로드한 문서 링크",
  }[key] || key;
}
function answerPreview(entries) {
  const firstText = entries.map(([key, value]) => value === true ? answerLabel(key) : String(value)).find(Boolean) || "제출 내용";
  return firstText.length > 70 ? `${firstText.slice(0, 70)}...` : firstText;
}
function renderSubmissionAnswers(submission) {
  const entries = Object.entries(submission.answers || {}).filter(([, value]) => value !== "" && value !== false && value != null);
  if (!entries.length) return `<div class="submission-detail empty-detail">작성된 내용이 없습니다.</div>`;
  const fileEntry = entries.find(([key]) => key === "fileUrl");
  const fileText = fileEntry ? String(fileEntry[1]).trim() : "";
  const hasFileLink = /^https?:\/\//i.test(fileText);
  const filePanel = fileText ? `<div class="uploaded-file-panel"><strong>업로드 문서</strong><p>신입간사가 드라이브에 업로드한 문서입니다.</p>${hasFileLink ? `<button class="ghost" type="button" data-drive-url="${escapeHtml(fileText)}" onclick="openExternalResource(this.dataset.driveUrl)">업로드 문서 바로가기</button>` : `<p class="file-text">${escapeHtml(fileText)}</p>`}</div>` : "";
  const detailEntries = entries.filter(([key]) => key !== "fileUrl");
  const detailItems = detailEntries.length ? detailEntries : entries;
  return `<div class="submission-answer-wrap">${filePanel}<details class="submission-detail"><summary><span>${escapeHtml(answerPreview(detailItems))}</span><b>전체 보기</b></summary>${detailItems.map(([key, value]) => {
    const text = value === true ? "예" : String(value);
    const isLink = /^https?:\/\//i.test(text);
    return `<div class="answer-item"><strong>${answerLabel(key)}</strong><p>${isLink ? `<a href="${escapeHtml(text)}" target="_blank" rel="noopener">${escapeHtml(text)}</a>` : escapeHtml(text)}</p></div>`;
  }).join("")}</details></div>`;
}function saveSubmissionDriveUrl() {
  if (!isAdmin()) return alert("관리자만 수정할 수 있습니다.");
  state.submissionDriveUrl = $("submissionDriveUrl").value.trim();
  saveState();
  renderAll();
  switchView("admin");
  showAdminSaved("제출 드라이브 링크가 저장되었습니다.");
}
function renderAdmin() {
  if (!isAdmin()) { $("adminView").innerHTML = `<div class="card"><h3>접근할 수 없습니다.</h3><p class="muted">관리자 계정으로 로그인해야 합니다.</p></div>`; return; }
  const userRows = state.users.map(u => `<tr class="user-edit-row" data-user-id="${u.id}"><td><input data-user-edit="name" value="${escapeHtml(u.name)}" /></td><td><select data-user-edit="departmentId">${optionTags(state.departments.filter(d => d.id !== "all"), u.departmentId)}</select></td><td><select data-user-edit="roleId">${optionTags(state.roles.filter(r => r.id !== "all"), u.roleId)}</select></td><td><input data-user-edit="status" value="${escapeHtml(u.status || "훈련 중")}" /></td><td><input type="password" placeholder="변경할 때만 입력" data-user-edit="pin" value="${escapeHtml(u.pin || "")}" /></td><td class="row-actions"><button class="success-btn" onclick="updateUser('${u.id}')">저장</button><button class="danger-btn" onclick="deleteUser('${u.id}')">삭제</button></td></tr>`).join("");  const statsRows = state.users.map(u => { const st = getStats(u); return `<tr><td><strong>${u.name}</strong></td><td>${deptName(u.departmentId)}</td><td>${roleName(u.roleId)}</td><td>${st.completed}/${st.total}</td><td><div class="progress-bar"><div class="progress-fill" style="width:${st.percent}%"></div></div><span class="muted">${st.percent}%</span></td></tr>`; }).join("");
  const submissionRows = state.submissions.slice().sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt)).map(s => { const u = state.users.find(x => x.id === s.userId); const c = state.contents.find(x => x.id === s.contentId); const userName = u?.name || s.userName || "-"; const department = u?.departmentId || s.department || ""; const role = u?.roleId || s.role || ""; return `<tr><td><strong>${escapeHtml(userName)}</strong><br><span class="muted">${deptName(department)} · ${roleName(role)}</span></td><td>${escapeHtml(c?.title || s.contentTitle || s.contentId)}<br><span class="muted">${formatDate(s.createdAt)}</span></td><td>${renderSubmissionAnswers(s)}</td><td>${statusBadge(s.status)}</td><td><button class="success-btn" onclick="reviewSubmission('${s.id}', '통과')">통과</button> <button class="ghost" onclick="reviewSubmission('${s.id}', '보완 요청')">보완</button> <button class="danger-btn" onclick="reviewSubmission('${s.id}', '반려')">반려</button> <button class="danger-btn" onclick="deleteSubmission('${s.id}')">삭제</button></td></tr>`; }).join("");
  const cloneOptions = state.contents.map((c, contentIndex) => ({ c, contentIndex })).sort((a, b) => a.c.order - b.c.order || a.c.title.localeCompare(b.c.title, "ko")).map(({ c, contentIndex }) => `<option value="${contentIndex}">${c.order}. ${escapeHtml(c.title)}</option>`).join("");
  const contentRows = state.contents.map((c, contentIndex) => ({ c, contentIndex })).sort((a, b) => a.c.order - b.c.order || a.c.title.localeCompare(b.c.title, "ko")).map(({ c, contentIndex }, index) => `<tr class="content-edit-row" data-content-index="${contentIndex}" data-content-id="${escapeHtml(c.id)}"><td><div class="order-drag-cell"><span class="order-chip">${index + 1}</span><button class="drag-handle" type="button" onpointerdown="contentPointerStart(event)" title="드래그해서 순서 변경" aria-label="드래그해서 순서 변경">↕</button></div></td><td><input data-edit="part" value="${escapeHtml(c.part)}" /></td><td><input data-edit="title" value="${escapeHtml(c.title)}" /></td><td><select data-edit="type">${typeOptions(c.type)}</select></td><td><select data-edit="dept">${optionTags(state.departments, c.dept)}</select></td><td><select data-edit="role">${optionTags(state.roles, c.role)}</select></td><td><input data-edit="minutes" type="number" min="0" value="${c.minutes || 0}" /></td><td><textarea class="link-list-input" data-edit="url" placeholder="링크를 한 줄에 하나씩 입력">${escapeHtml(c.url || "")}</textarea></td><td><textarea data-edit="description">${escapeHtml(c.description || "")}</textarea></td><td class="row-actions"><button class="success-btn" onclick="updateContent(this)">저장</button><button class="danger-btn" onclick="deleteContent(this)">삭제</button></td></tr>`).join("");
  const reviewDriveButton = state.submissionDriveUrl ? `<button class="ghost" type="button" onclick="openExternalResource('${escapeHtml(state.submissionDriveUrl)}')">제출 드라이브 열기</button>` : "";
  $("adminView").innerHTML = `<div class="grid cols-2"><div class="card"><h3>제출 드라이브 설정</h3><div class="form-grid"><div class="field"><label>공유 드라이브 업로드 폴더 링크</label><input id="submissionDriveUrl" value="${escapeHtml(state.submissionDriveUrl || "")}" placeholder="https://drive.google.com/drive/folders/..." /></div><p class="muted">신입간사는 이 폴더에 문서를 업로드한 뒤, 공유 링크를 제출합니다.</p><button class="primary" type="button" onclick="saveSubmissionDriveUrl()">제출 드라이브 저장</button></div></div><div class="card"><h3>신입 간사 등록</h3><div class="form-grid"><div class="field"><label>이름</label><input id="newUserName" placeholder="홍길동" /></div><div class="field"><label>초기 비밀번호</label><input id="newUserPin" type="password" placeholder="숫자 4자리" /></div><div class="form-grid cols-2"><div class="field"><label>부서</label><select id="newUserDept">${state.departments.filter(d=>d.id!=="all").map(d=>`<option value="${d.id}">${d.name}</option>`).join("")}</select></div><div class="field"><label>역할</label><select id="newUserRole">${state.roles.filter(r=>r.id!=="all").map(r=>`<option value="${r.id}">${r.name}</option>`).join("")}</select></div></div><button class="primary" onclick="addUser()">간사 추가</button></div></div><div class="card"><h3>콘텐츠 추가</h3><div class="form-grid"><div class="field"><label>기존 과정 불러오기</label><div class="inline-action"><select id="cloneContentSource">${cloneOptions}</select><button class="ghost" type="button" onclick="fillContentFromTemplate()">복사</button></div></div><div class="field"><label>제목</label><input id="newContentTitle" placeholder="새 편집 기본 원칙" /></div><div class="form-grid cols-2"><div class="field"><label>파트</label><input id="newContentPart" value="파트 3. 역할별 훈련" /></div><div class="field"><label>유형</label><select id="newContentType">${typeOptions("문서")}</select></div></div><div class="form-grid cols-2"><div class="field"><label>대상 부서</label><select id="newContentDept">${state.departments.map(d=>`<option value="${d.id}">${d.name}</option>`).join("")}</select></div><div class="field"><label>대상 역할</label><select id="newContentRole">${state.roles.map(r=>`<option value="${r.id}">${r.name}</option>`).join("")}</select></div></div><div class="form-grid cols-2"><div class="field"><label>예상 시간(분)</label><input id="newContentMinutes" type="number" min="0" value="30" /></div><div class="field"><label>링크</label><textarea id="newContentUrl" placeholder="링크를 한 줄에 하나씩 입력"></textarea></div></div><div class="field"><label>설명</label><textarea id="newContentDesc" placeholder="신입 간사에게 보일 안내문"></textarea></div><button class="primary" onclick="addContent()">콘텐츠 추가</button></div></div></div><p id="adminSaveNotice" class="save-notice" aria-live="polite"></p><div class="section-title"><h3>신입 간사 관리</h3><button class="ghost" type="button" onclick="saveAllUsers()">간사 전체 저장</button><button class="ghost" type="button" onclick="syncRemoteUsers()">시트 새로고침</button><span class="badge">${state.users.length}명</span></div><div class="card table-wrap"><table class="user-admin-table"><thead><tr><th>이름</th><th>부서</th><th>역할</th><th>상태</th><th>비밀번호</th><th>관리</th></tr></thead><tbody>${userRows}</tbody></table></div><div class="section-title"><h3>훈련 과정 관리</h3><button class="ghost" type="button" onclick="saveAllContents()">과정 전체 저장</button><span class="badge">${state.contents.length}개 과정</span></div><div class="card table-wrap"><table class="content-admin-table"><thead><tr><th>순서 이동</th><th>파트</th><th>제목</th><th>유형</th><th>부서</th><th>역할</th><th>분</th><th>링크</th><th>설명</th><th>관리</th></tr></thead><tbody id="contentAdminBody">${contentRows}</tbody></table></div><div class="section-title"><h3>간사별 진행률</h3></div><div class="card table-wrap"><table><thead><tr><th>이름</th><th>부서</th><th>역할</th><th>완료</th><th>진행률</th></tr></thead><tbody>${statsRows}</tbody></table></div><div class="section-title"><h3>제출물 검토</h3><div class="row-actions">${reviewDriveButton}<button class="ghost" type="button" onclick="syncRemoteSubmissions()">구글 시트 새로고침</button></div></div><div class="card table-wrap"><table><thead><tr><th>제출자</th><th>과제</th><th>제출 내용</th><th>상태</th><th>검토</th></tr></thead><tbody>${submissionRows || `<tr><td colspan="5" class="empty">검토할 제출물이 없습니다.</td></tr>`}</tbody></table></div>`;
  $("adminView").insertAdjacentHTML("afterbegin", renderAssignmentSettings());
  $("adminView").insertAdjacentHTML("afterbegin", renderPartSettings());
  $("adminView").insertAdjacentHTML("beforeend", `<section class="password-settings"><div class="section-title"><h3>관리자 비밀번호 변경</h3></div><form id="adminPasswordForm" class="form-grid" onsubmit="changeAdminPassword(event)"><div class="field"><label for="currentAdminPassword">현재 비밀번호</label><input id="currentAdminPassword" type="password" autocomplete="current-password" required /></div><div class="form-grid cols-2"><div class="field"><label for="newAdminPassword">새 비밀번호</label><input id="newAdminPassword" type="password" autocomplete="new-password" minlength="8" maxlength="8" placeholder="8자리" required /></div><div class="field"><label for="confirmAdminPassword">새 비밀번호 확인</label><input id="confirmAdminPassword" type="password" autocomplete="new-password" minlength="8" maxlength="8" placeholder="8자리" required /></div></div><button class="primary" type="submit">비밀번호 변경</button><p id="passwordChangeError" role="alert"></p></form></section>`);
  document.querySelectorAll('[data-edit="dept"], #newContentDept').forEach(select => {
    const row = select.closest(".content-edit-row");
    const dept = row ? state.contents[Number(row.dataset.contentIndex)].dept : "all";
    const container = document.createElement("div");
    container.className = "department-choices";
    container.setAttribute("role", "group");
    container.setAttribute("aria-label", "대상 부서");
    if (row) container.dataset.edit = "dept";
    else container.id = "newContentDept";
    container.innerHTML = departmentChoices(dept);
    select.replaceWith(container);
  });
  document.querySelectorAll('#newContentPart, [data-edit="part"]').forEach(input => input.setAttribute("list", "trainingPartOptions"));
}
function trainingParts() {
  return [...new Set([...(state.parts || []), ...state.contents.map(content => content.part)].filter(Boolean))];
}
async function changeAdminPassword(event) {
  event.preventDefault();
  if (!isAdmin()) return;
  const currentPassword = $("currentAdminPassword").value;
  const newPassword = $("newAdminPassword").value;
  const error = $("passwordChangeError");
  if (newPassword !== $("confirmAdminPassword").value) { error.textContent = "새 비밀번호가 서로 다릅니다."; return; }
  if (newPassword.length !== 8) { error.textContent = "새 비밀번호는 정확히 8자로 입력해 주세요."; return; }
  if (newPassword === currentPassword) { error.textContent = "현재와 다른 새 비밀번호를 입력해 주세요."; return; }
  const button = event.target.querySelector('button[type="submit"]');
  button.disabled = true;
  error.textContent = "";
  window.clearTimeout(configSaveTimer);
  try {
    await sheetJsonp({ action: "password-change", currentPassword, newPassword });
    event.target.reset();
    clearSession();
    state.submissions = [];
    state.progress = {};
    state.users = [];
    showLogin();
    showLoginError("비밀번호가 변경되었습니다. 새 비밀번호로 로그인해 주세요.");
  } catch (failure) { error.textContent = failure.message; }
  finally { button.disabled = false; }
}
function renderPartSettings() {
  const parts = trainingParts();
  return `<section class="part-settings assignment-settings"><div class="section-title"><h3>훈련 과정 파트 관리</h3></div><form class="form-grid" onsubmit="event.preventDefault(); addTrainingPart()"><div class="field"><label for="newTrainingPart">새 파트 이름</label><div class="inline-action"><input id="newTrainingPart" maxlength="100" required placeholder="파트 3. 역할별 훈련" /><button class="primary" type="submit">파트 추가</button></div></div></form><div class="part-edit-list">${parts.map((part, index) => `<form class="part-edit-form field" data-part-index="${index}" onsubmit="event.preventDefault(); renameTrainingPart(${index})"><label for="trainingPart${index}">파트 이름 <span class="muted">(${state.contents.filter(content => content.part === part).length}개 과정)</span></label><div class="inline-action"><input id="trainingPart${index}" maxlength="100" required value="${escapeHtml(part)}" /><button class="success-btn" type="submit">이름 저장</button></div></form>`).join("")}</div><datalist id="trainingPartOptions">${parts.map(part => `<option value="${escapeHtml(part)}"></option>`).join("")}</datalist></section>`;
}
function addTrainingPart() {
  if (!isAdmin()) return alert("관리자만 추가할 수 있습니다.");
  const name = $("newTrainingPart").value.trim();
  if (!name) return alert("파트 이름을 입력해 주세요.");
  if (trainingParts().some(part => part.normalize("NFKC").toLocaleLowerCase() === name.normalize("NFKC").toLocaleLowerCase())) return alert("이미 등록된 파트 이름입니다.");
  const previous = state.parts;
  state.parts = [...trainingParts(), name];
  if (!saveState()) { state.parts = previous; return; }
  document.querySelector(".part-settings").outerHTML = renderPartSettings();
  showAdminSaved("새 파트가 추가되었습니다.");
}
function renameTrainingPart(index) {
  if (!isAdmin()) return alert("관리자만 수정할 수 있습니다.");
  const parts = trainingParts();
  const oldName = parts[index];
  if (!oldName) return;
  const name = $(`trainingPart${index}`).value.trim();
  if (!name) return alert("파트 이름을 입력해 주세요.");
  if (parts.some((part, partIndex) => partIndex !== index && part.normalize("NFKC").toLocaleLowerCase() === name.normalize("NFKC").toLocaleLowerCase())) return alert("이미 등록된 파트 이름입니다.");
  const previousParts = state.parts;
  const affected = state.contents.filter(content => content.part === oldName);
  state.parts = parts.map(part => part === oldName ? name : part);
  affected.forEach(content => { content.part = name; });
  if (!saveState()) {
    state.parts = previousParts;
    affected.forEach(content => { content.part = oldName; });
    return;
  }
  document.querySelectorAll('#newContentPart, [data-edit="part"]').forEach(input => {
    if (input.value === oldName) input.value = name;
  });
  document.querySelector(".part-settings").outerHTML = renderPartSettings();
  showAdminSaved("파트 이름과 소속 과정이 수정되었습니다.");
}
function renderAssignmentSettings() {
  const sections = [
    { key: "departments", label: "부서", inputId: "newDepartmentName" },
    { key: "roles", label: "역할", inputId: "newRoleName" },
  ];
  return `<section class="assignment-settings"><div class="section-title"><h3>부서 및 역할 관리</h3></div><div class="grid cols-2">${sections.map(({ key, label, inputId }) => `<div><form class="form-grid" onsubmit="event.preventDefault(); addAssignmentOption('${key}')"><div class="field"><label for="${inputId}">${label} 이름</label><div class="inline-action"><input id="${inputId}" maxlength="60" required /><button class="primary" type="submit">${label} 추가</button></div></div></form><div class="meta-row">${state[key].filter(item => item.id !== "all").map(item => `<span class="badge">${escapeHtml(item.name)}</span>`).join("")}</div></div>`).join("")}</div></section>`;
}
function addAssignmentOption(key) {
  if (!isAdmin()) return alert("관리자만 추가할 수 있습니다.");
  if (!["departments", "roles"].includes(key)) return;
  const label = key === "departments" ? "부서" : "역할";
  const input = $(key === "departments" ? "newDepartmentName" : "newRoleName");
  const name = input.value.trim();
  if (!name) return alert(`${label} 이름을 입력해 주세요.`);
  if (state[key].some(item => item.name.normalize("NFKC").toLocaleLowerCase() === name.normalize("NFKC").toLocaleLowerCase())) {
    return alert(`이미 등록된 ${label} 이름입니다.`);
  }
  const option = { id: `${key}_${crypto.randomUUID()}`, name };
  state[key].push(option);
  if (!saveState()) {
    state[key].pop();
    return;
  }
  // Refresh option lists without discarding unsaved user or course edits.
  const selectors = key === "departments"
    ? ['#newUserDept', '#newContentDept', '[data-user-edit="departmentId"]', '[data-edit="dept"]']
    : ['#newUserRole', '#newContentRole', '[data-user-edit="roleId"]', '[data-edit="role"]'];
  document.querySelectorAll(selectors.join(",")).forEach(select => {
    if (select.classList.contains("department-choices")) {
      const selected = readDepartments(select);
      select.innerHTML = departmentChoices(selected);
    } else select.add(new Option(name, option.id));
  });
  document.querySelector(".assignment-settings:not(.part-settings)").outerHTML = renderAssignmentSettings();
  showAdminSaved(`${label} '${name}'이 추가되었습니다.`);
}
async function updateUser(userId) {
  if (!isAdmin()) return alert("관리자만 수정할 수 있습니다.");
  const row = document.querySelector(`[data-user-id="${userId}"]`);
  const target = state.users.find(u => u.id === userId);
  if (!row || !target) return;
  const value = name => row.querySelector(`[data-user-edit="${name}"]`).value.trim();
  const name = value("name");
  if (!name) return alert("이름을 입력해 주세요.");
  target.name = name;
  target.departmentId = value("departmentId");
  target.roleId = value("roleId");
  target.status = value("status") || "훈련 중";
  target.pin = value("pin");
  if (!saveState()) return;
  if (!await saveUsersToSheet()) return;
  renderLoginOptions();
  renderAll();
  switchView("admin");
  showAdminSaved("간사 정보가 저장되었습니다.");
}
async function saveAllUsers() {
  if (!isAdmin()) return alert("관리자만 수정할 수 있습니다.");
  document.querySelectorAll(".user-edit-row").forEach(row => {
    const userId = row.dataset.userId;
    const target = state.users.find(u => u.id === userId);
    if (!target) return;
    const value = name => row.querySelector(`[data-user-edit="${name}"]`).value.trim();
    if (!value("name")) return;
    target.name = value("name");
    target.departmentId = value("departmentId");
    target.roleId = value("roleId");
    target.status = value("status") || "훈련 중";
    target.pin = value("pin");
  });
  if (!saveState()) return;
  if (!await saveUsersToSheet()) return;
  renderLoginOptions();
  renderAll();
  switchView("admin");
  showAdminSaved("간사 정보들이 모두 저장되었습니다.");
}
async function deleteUser(userId) {
  if (!isAdmin()) return alert("관리자만 삭제할 수 있습니다.");
  const target = state.users.find(u => u.id === userId);
  if (!target) return;
  if (state.users.length <= 1) return alert("최소 1명의 간사는 남겨두어야 합니다.");
  if (!confirm(`'${target.name}' 간사를 삭제할까요? 관련 제출물과 진행 기록도 함께 삭제됩니다.`)) return;
  state.users = state.users.filter(u => u.id !== userId);
  state.submissions = state.submissions.filter(s => s.userId !== userId);
  Object.keys(state.progress).forEach(key => { if (key.startsWith(`${userId}:`)) delete state.progress[key]; });
  if (currentUserId === userId) currentUserId = state.users[0]?.id;
  saveState();
  if (!await saveUsersToSheet()) return;
  renderLoginOptions();
  renderAll();
  switchView("admin");
  showAdminSaved("간사가 삭제되었습니다.");
}
let pointerContentDrag = null;
function contentPointerStart(event) {
  if (event.button !== 0) return;
  const row = event.currentTarget.closest(".content-edit-row");
  if (!row) return;
  event.preventDefault();
  pointerContentDrag = { row, changed: false };
  row.classList.add("dragging");
  document.body.classList.add("content-drag-active");
  event.currentTarget.setPointerCapture?.(event.pointerId);
  window.addEventListener("pointermove", contentPointerMove);
  window.addEventListener("pointerup", contentPointerEnd, { once: true });
}
function contentPointerMove(event) {
  if (!pointerContentDrag) return;
  const tbody = $("contentAdminBody");
  const dragging = pointerContentDrag.row;
  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest(".content-edit-row");
  if (!tbody || !target || target === dragging || target.parentElement !== tbody) return;
  const box = target.getBoundingClientRect();
  const insertAfter = event.clientY > box.top + box.height / 2;
  const nextRow = insertAfter ? target.nextSibling : target;
  if (nextRow === dragging) return;
  tbody.insertBefore(dragging, nextRow);
  pointerContentDrag.changed = true;
  updateVisibleContentOrder();
}
function contentPointerEnd() {
  window.removeEventListener("pointermove", contentPointerMove);
  const drag = pointerContentDrag;
  document.body.classList.remove("content-drag-active");
  document.querySelectorAll(".content-edit-row.dragging").forEach(row => row.classList.remove("dragging"));
  pointerContentDrag = null;
  if (drag?.changed) applyDraggedContentOrder();
}
function updateVisibleContentOrder() {
  document.querySelectorAll(".content-edit-row").forEach((row, index) => {
    const chip = row.querySelector(".order-chip");
    if (chip) chip.textContent = index + 1;
  });
}
function applyDraggedContentOrder() {
  if (!isAdmin()) return;
  saveContentRowsFromScreen();
  if (!saveState()) return;
  renderAll();
  switchView("admin");
  showAdminSaved("훈련 과정 순서가 저장되었습니다.");
}
function saveContentRowsFromScreen() {
  document.querySelectorAll(".content-edit-row").forEach((row, index) => {
    const content = state.contents[Number(row.dataset.contentIndex)];
    if (!content) return;
    const value = name => row.querySelector(`[data-edit="${name}"]`).value.trim();
    content.order = index + 1;
    content.part = value("part") || "기타 과정";
    content.title = value("title") || content.title;
    content.type = value("type");
    content.dept = readDepartments(row.querySelector('[data-edit="dept"]'));
    content.role = value("role");
    content.minutes = Number(value("minutes")) || 0;
    content.url = value("url");
    content.description = value("description") || "설명이 없습니다.";
  });
}
function updateContent(button) {
  if (!isAdmin()) return alert("관리자만 수정할 수 있습니다.");
  const row = button.closest(".content-edit-row");
  const content = state.contents[Number(row?.dataset.contentIndex)];
  if (!row || !content) return;
  const value = name => row.querySelector(`[data-edit="${name}"]`).value.trim();
  const title = value("title");
  if (!title) return alert("제목을 입력해 주세요.");
  content.order = Array.from(document.querySelectorAll(".content-edit-row")).indexOf(row) + 1;
  content.part = value("part") || "기타 과정";
  content.title = title;
  content.type = value("type");
  content.dept = readDepartments(row.querySelector('[data-edit="dept"]'));
  content.role = value("role");
  content.minutes = Number(value("minutes")) || 0;
  content.url = value("url");
  content.description = value("description") || "설명이 없습니다.";
  if (!saveState()) return;
  renderAll();
  switchView("admin");
  showAdminSaved("훈련 과정이 저장되었습니다.");
}
function saveAllContents() {
  if (!isAdmin()) return alert("관리자만 수정할 수 있습니다.");
  saveContentRowsFromScreen();
  if (!saveState()) return;
  renderAll();
  switchView("admin");
  showAdminSaved("훈련 과정 변경사항이 모두 저장되었습니다.");
}
function deleteContent(button) {
  if (!isAdmin()) return alert("관리자만 삭제할 수 있습니다.");
  const row = button.closest(".content-edit-row");
  const contentIndex = Number(row?.dataset.contentIndex);
  const content = state.contents[contentIndex];
  if (!content) return;
  if (!confirm(`'${content.title}' 과정을 삭제할까요? 관련 제출물과 진행 기록도 함께 정리됩니다.`)) return;
  state.contents.splice(contentIndex, 1);
  state.submissions = state.submissions.filter(s => s.contentId !== content.id);
  Object.keys(state.progress).forEach(key => { if (key.endsWith(`:${content.id}`)) delete state.progress[key]; });
  saveState(); renderAll(); switchView("admin");
}
function openContentByIndex(contentIndex) {
  const content = state.contents[Number(contentIndex)];
  if (!content) return;
  openContent(content.id);
}
function openContent(contentId) {
  if (isAdmin()) return;
  const c = state.contents.find(x => x.id === contentId);
  const assigned = getAssignedContents();
  if (!c || !assigned.some(item => item.id === contentId)) return;
  $("modalType").textContent = `${c.part} · ${c.type}`;
  $("modalTitle").textContent = c.title;
  const progress = getProgress(currentUserId, c.id);
  const previousSubmission = state.submissions.filter(s => s.userId === currentUserId && s.contentId === c.id).at(-1);
  let body = `<div class="help-box"><strong>안내</strong><br>${c.description}</div>${resourceButtons(c)}<p>현재 상태: ${statusBadge(progress.status)}</p>`;
  if (c.type === "영상") body += `${videoPlayer(c)}${submissionForm(c, [["watched","완료했습니다.","checkbox"],["summary","강의 핵심 요약","textarea"],["learned","새롭게 배운 점","textarea"],["apply","실제 업무 적용점","textarea"],["question","남기고 싶은 질문","textarea"],["understanding","이해도 평가: 1~5점","number"]], previousSubmission)}`;
  else if (c.type === "독서") body += submissionForm(c, [["read","완료했습니다.","checkbox"],["summary","책의 핵심 내용 요약","textarea"],["impressive","인상 깊었던 내용","textarea"],["apply","업무 적용점","textarea"]], previousSubmission);
  else body += submissionForm(c, [["confirmed","완료했습니다.","checkbox"],["summary","요약 또는 리포트","textarea"],["question","질문","textarea"]], previousSubmission);
  $("modalBody").innerHTML = body;
  $("contentDialog").showModal();
}
function submissionForm(content, fields, previousSubmission) {
  const answers = previousSubmission?.answers || {};
  const orderedFields = [...fields.filter(([, , type]) => type !== "checkbox"), ...fields.filter(([, , type]) => type === "checkbox")];
  const rows = orderedFields.map(([key, label, type]) => {
    if (type === "textarea") return `<div class="field"><label>${label}</label><textarea data-answer="${key}">${answers[key] || ""}</textarea></div>`;
    if (type === "checkbox") return `<div class="field checkbox-field"><label class="checkbox-label"><input type="checkbox" data-answer="${key}" ${answers[key] ? "checked" : ""} /><span>${label}</span></label></div>`;
    if (type === "number") return `<div class="field"><label>${label}</label><input type="number" min="1" max="5" data-answer="${key}" value="${answers[key] || ""}" /></div>`;
    return `<div class="field"><label>${label}</label><input data-answer="${key}" value="${answers[key] || ""}" /></div>`;
  }).join("");
  const driveGuide = `<div class="drive-submit-guide"><strong>문서 제출 방법</strong><p>작성한 문서를 공유 드라이브에 업로드한 뒤, 업로드한 문서의 공유 링크를 아래 입력칸에 붙여넣어 주세요.</p>${state.submissionDriveUrl ? `<button class="ghost" type="button" onclick="openExternalResource('${escapeHtml(state.submissionDriveUrl)}')">제출 드라이브 열기</button>` : ""}</div>`;
  const fileUrlField = `<div class="field"><label>드라이브에 업로드한 문서 링크</label><input data-answer="fileUrl" value="${answers.fileUrl || ""}" placeholder="https://drive.google.com/..." /></div>`;
  return `<form class="form-grid" onsubmit="submitContent(event, '${content.id}')">${driveGuide}${rows}${fileUrlField}<button class="primary" type="submit">제출하기</button></form>`;
}
async function submitContent(event, contentId) {
  event.preventDefault();
  if (isAdmin()) return;
  const answers = {};
  event.target.querySelectorAll("[data-answer]").forEach(el => { answers[el.dataset.answer] = el.type === "checkbox" ? el.checked : el.value.trim(); });
  const user = currentUser();
  const content = state.contents.find(c => c.id === contentId);
  const submission = {
    id: `s_${Date.now()}`,
    userId: currentUserId,
    userName: user?.name || "",
    department: user?.departmentId || "",
    role: user?.roleId || "",
    contentId,
    contentTitle: content?.title || contentId,
    answers,
    status: "검토 중",
    feedback: "",
    createdAt: new Date().toISOString(),
  };
  try { await submitToSheet(submission); }
  catch (error) { alert(error.message); return; }
  state.submissions.push(submission);
  setProgress(currentUserId, contentId, { status: "검토 중", submittedAt: submission.createdAt });
  if (!saveState()) return;
  $("contentDialog").close();
  renderAll();
  switchView("submissions");
}
async function reviewSubmission(submissionId, status) {
  if (!isAdmin()) return alert("관리자만 검토할 수 있습니다.");
  const s = state.submissions.find(x => x.id === submissionId);
  if (!s) return alert("제출물을 찾을 수 없습니다.");
  const feedbackByStatus = {
    "통과": "확인했습니다. 통과 처리되었습니다.",
    "보완 요청": "내용을 조금 더 구체적으로 보완해 주세요.",
    "반려": "다시 작성해 주세요.",
  };
  const feedback = feedbackByStatus[status] || "";
  try { await reviewSubmissionOnSheet(submissionId, status, feedback); }
  catch (error) { alert(error.message || "구글 시트 검토 상태 저장에 실패했습니다."); return; }
  s.status = status;
  s.feedback = feedback;
  s.reviewedAt = new Date().toISOString();
  setProgress(s.userId, s.contentId, { status, completedAt: status === "통과" ? new Date().toISOString() : undefined });
  saveState();
  renderAll();
  switchView("admin");
  showAdminSaved(`제출물이 '${status}' 상태로 변경되었습니다.`);
}
async function deleteSubmission(submissionId) {
  if (!isAdmin()) return alert("관리자만 삭제할 수 있습니다.");
  const submission = state.submissions.find(x => x.id === submissionId);
  if (!submission) return alert("제출물을 찾을 수 없습니다.");
  const user = state.users.find(u => u.id === submission.userId);
  const content = state.contents.find(c => c.id === submission.contentId);
  const userName = user?.name || submission.userName || "피훈련자";
  const contentTitle = content?.title || submission.contentTitle || submission.contentId;
  if (!confirm(`'${userName}'의 '${contentTitle}' 제출물을 삭제할까요?`)) return;
  try { await deleteSubmissionOnSheet(submissionId); }
  catch (error) { return alert(error.message || "구글 시트 제출물 삭제에 실패했습니다."); }
  state.submissions = state.submissions.filter(item => item.id !== submissionId);
  const remaining = state.submissions
    .filter(item => item.userId === submission.userId && item.contentId === submission.contentId)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const progressKey = `${submission.userId}:${submission.contentId}`;
  if (remaining.length) {
    const latest = remaining[0];
    state.progress[progressKey] = {
      status: latest.status,
      submittedAt: latest.createdAt,
      completedAt: latest.status === "통과" ? (latest.reviewedAt || latest.createdAt) : undefined,
    };
  } else {
    delete state.progress[progressKey];
  }
  if (!saveState()) return;
  renderAll();
  switchView("admin");
  showAdminSaved("제출물이 삭제되었습니다.");
}
async function addUser() {
  if (!isAdmin()) return alert("관리자만 등록할 수 있습니다.");
  const name = $("newUserName").value.trim();
  const pin = $("newUserPin").value.trim();
  if (!pin) return alert("초기 비밀번호를 입력해 주세요.");
  if (!name) return alert("이름을 입력해 주세요.");
  const newUser = { id: `u_${Date.now()}`, name, departmentId: $("newUserDept").value, roleId: $("newUserRole").value, status: "훈련 중", pin };
  state.users.push(newUser);
  if (!saveState()) return;
  if (!await saveUsersToSheet()) return;
  renderLoginOptions();
  renderAll();
  switchView("admin");
  showAdminSaved("신입 간사가 추가되었습니다.");
}
function fillContentFromTemplate() {
  if (!isAdmin()) return alert("관리자만 사용할 수 있습니다.");
  const sourceIndex = Number($("cloneContentSource")?.value);
  const source = state.contents[sourceIndex];
  if (!source) return alert("복사할 훈련 과정을 선택해 주세요.");
  $("newContentTitle").value = `${source.title} 복사본`;
  $("newContentPart").value = source.part || "";
  $("newContentType").value = source.type || "문서";
  $("newContentDept").innerHTML = departmentChoices(source.dept);
  $("newContentRole").value = source.role || "all";
  $("newContentMinutes").value = source.minutes || 0;
  $("newContentUrl").value = source.url || "";
  $("newContentDesc").value = source.description || "";
  showAdminSaved("기존 과정 내용을 불러왔습니다. 필요한 부분만 수정해 주세요.");
}
function addContent() {
  if (!isAdmin()) return alert("관리자만 추가할 수 있습니다.");
  const title = $("newContentTitle").value.trim();
  if (!title) return alert("콘텐츠 제목을 입력해 주세요.");
  state.contents.push({ id: nextContentId(), part: $("newContentPart").value.trim() || "파트 3. 역할별 훈련", title, type: $("newContentType").value, dept: readDepartments($("newContentDept")), role: $("newContentRole").value, order: Math.max(...state.contents.map(c => c.order)) + 1, minutes: Number($("newContentMinutes").value) || 0, url: $("newContentUrl").value.trim(), description: $("newContentDesc").value.trim() || "관리자가 추가한 훈련 콘텐츠입니다." });
  if (!saveState()) return;
  renderAll();
  switchView("admin");
  showAdminSaved("콘텐츠가 추가되었습니다.");
}
function renderAll() {
  renderSessionCard();
  if (!isAdmin()) {
    renderDashboard(); renderCourses(); renderSubmissions();
  }
  renderAdmin();
}
function formatDate(value) { return value ? new Date(value).toLocaleString("ko-KR", { dateStyle: "medium", timeStyle: "short" }) : "-"; }
function switchView(view) {
  if (view === "admin" && !isAdmin()) view = "dashboard";
  activeView = view;
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active-view"));
  $(`${view}View`).classList.add("active-view");
  document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  $("viewTitle").textContent = { dashboard: "나의 온보딩", courses: "훈련 과정", submissions: "제출함", admin: "관리자" }[view];
  const shouldSync = ["admin", "dashboard", "courses", "submissions"].includes(view);
  if (shouldSync && !sheetSyncInFlight && Date.now() - lastSheetSyncAt > 5000) {
    syncRemoteSubmissions({ silent: true });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderLoginOptions();
  $("loginForm").addEventListener("submit", handleLogin);
  document.querySelectorAll(".nav-item").forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.view)));
  $("closeDialog").addEventListener("click", () => $("contentDialog").close());
  $("resetDemo").addEventListener("click", () => {
    if (!isAdmin()) return;
    if (confirm("데모 데이터를 초기 상태로 되돌릴까요?")) {
      localStorage.removeItem(STORAGE_KEY);
      clearSession();
      state = normalizeState(structuredClone(seed));
      currentUserId = state.users[0].id;
      showLogin();
    }
  });
  if (session?.token) resumeServerSession();
  else { showLogin(); syncRemoteUsers({ silent: true }); }
});
































































