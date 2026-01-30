// Utility: current date/time
const dateEl = document.getElementById("current-date");
const timeEl = document.getElementById("current-time");

function updateDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const time = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
  if (dateEl) dateEl.textContent = date;
  if (timeEl) timeEl.textContent = time;
}

updateDateTime();
setInterval(updateDateTime, 1000 * 60);

// Navigation between sections
const navButtons = document.querySelectorAll(".nav-item");
const sections = {
  today: document.getElementById("section-today"),
  tasks: document.getElementById("section-tasks"),
  notes: document.getElementById("section-notes"),
  stats: document.getElementById("section-stats"),
};

const sectionTitle = document.getElementById("section-title");
const sectionSubtitle = document.getElementById("section-subtitle");

const sectionMeta = {
  today: {
    title: "Today Overview",
    subtitle: "Capture your tasks, notes, and focus for today.",
  },
  tasks: {
    title: "Task Manager",
    subtitle: "Organize tasks with priorities and due dates.",
  },
  notes: {
    title: "Notes",
    subtitle: "Write and keep track of your ideas.",
  },
  stats: {
    title: "Stats & Reflection",
    subtitle: "Review your progress and reflect on your day.",
  },
};

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-section");
    if (!target || !sections[target]) return;

    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    Object.values(sections).forEach((sec) => sec.classList.add("hidden"));
    sections[target].classList.remove("hidden");

    if (sectionTitle && sectionSubtitle) {
      sectionTitle.textContent = sectionMeta[target].title;
      sectionSubtitle.textContent = sectionMeta[target].subtitle;
    }
  });
});

// Today quick tasks
const quickTaskForm = document.getElementById("quick-task-form");
const quickTaskInput = document.getElementById("quick-task-input");
const todayTaskList = document.getElementById("today-task-list");
const tasksSummary = document.getElementById("tasks-summary");

const state = {
  quickTasks: [],
  tasks: [],
  notes: [],
  stats: {
    focusSessions: 0,
  },
};

function renderQuickTasks() {
  if (!todayTaskList) return;
  todayTaskList.innerHTML = "";
  state.quickTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task-item" + (task.completed ? " completed" : "");

    const checkbox = document.createElement("button");
    checkbox.className = "task-checkbox";
    checkbox.innerHTML = task.completed ? "✓" : "";
    checkbox.addEventListener("click", () => {
      state.quickTasks[index].completed = !state.quickTasks[index].completed;
      renderQuickTasks();
      updateStats();
    });

    const title = document.createElement("div");
    title.className = "task-title";
    title.textContent = task.title;

    const remove = document.createElement("button");
    remove.className = "task-remove";
    remove.textContent = "✕";
    remove.addEventListener("click", () => {
      state.quickTasks.splice(index, 1);
      renderQuickTasks();
      updateStats();
    });

    li.appendChild(checkbox);
    li.appendChild(title);
    li.appendChild(remove);
    todayTaskList.appendChild(li);
  });

  const total = state.quickTasks.length;
  const done = state.quickTasks.filter((t) => t.completed).length;
  if (tasksSummary) {
    tasksSummary.textContent = `${done} done • ${total} total`;
  }
}

if (quickTaskForm && quickTaskInput) {
  quickTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = quickTaskInput.value.trim();
    if (!title) return;
    state.quickTasks.unshift({ title, completed: false });
    quickTaskInput.value = "";
    renderQuickTasks();
    updateStats();
  });
}

// Focus timer (simple 25-min pomodoro)
let timerSeconds = 25 * 60;
let timerInterval = null;

const timerDisplay = document.getElementById("timer-display");
const timerStart = document.getElementById("timer-start");
const timerPause = document.getElementById("timer-pause");
const timerReset = document.getElementById("timer-reset");

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function renderTimer() {
  if (timerDisplay) {
    timerDisplay.textContent = formatTime(timerSeconds);
  }
}

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    timerSeconds -= 1;
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      timerSeconds = 0;
      renderTimer();
      // Count as one focus session
      state.stats.focusSessions += 1;
      updateStats();
      alert("Focus session complete! Take a short break.");
      timerSeconds = 25 * 60;
    } else {
      renderTimer();
    }
  }, 1000);
}

function pauseTimer() {
  if (!timerInterval) return;
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  timerSeconds = 25 * 60;
  renderTimer();
}

if (timerStart) timerStart.addEventListener("click", startTimer);
if (timerPause) timerPause.addEventListener("click", pauseTimer);
if (timerReset) timerReset.addEventListener("click", resetTimer);

renderTimer();

// Full task manager
const taskForm = document.getElementById("task-form");
const taskTitle = document.getElementById("task-title");
const taskPriority = document.getElementById("task-priority");
const taskDue = document.getElementById("task-due");
const taskList = document.getElementById("task-list");
const filterChips = document.querySelectorAll(".chip[data-filter]");

let currentFilter = "all";

function renderTasks() {
  if (!taskList) return;
  taskList.innerHTML = "";

  const filtered = state.tasks.filter((task) => {
    if (currentFilter === "all") return true;
    if (currentFilter === "active") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true;
  });

  filtered.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task-item" + (task.completed ? " completed" : "");

    const checkbox = document.createElement("button");
    checkbox.className = "task-checkbox";
    checkbox.innerHTML = task.completed ? "✓" : "";
    checkbox.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
      updateStats();
    });

    const content = document.createElement("div");
    content.style.flex = "1";

    const titleRow = document.createElement("div");
    titleRow.className = "task-title";
    titleRow.textContent = task.title;

    const metaRow = document.createElement("div");
    metaRow.className = "task-meta";

    const priority = document.createElement("span");
    priority.className = `priority ${task.priority}`;
    priority.textContent = task.priority[0].toUpperCase() + task.priority.slice(1);

    metaRow.appendChild(priority);

    if (task.due) {
      const due = document.createElement("span");
      due.textContent = `Due ${task.due}`;
      metaRow.appendChild(due);
    }

    content.appendChild(titleRow);
    content.appendChild(metaRow);

    const remove = document.createElement("button");
    remove.className = "task-remove";
    remove.textContent = "✕";
    remove.addEventListener("click", () => {
      const idx = state.tasks.indexOf(task);
      if (idx !== -1) {
        state.tasks.splice(idx, 1);
      }
      renderTasks();
      updateStats();
    });

    li.appendChild(checkbox);
    li.appendChild(content);
    li.appendChild(remove);
    taskList.appendChild(li);
  });

  updateStats();
}

if (taskForm && taskTitle && taskPriority && taskDue) {
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = taskTitle.value.trim();
    if (!title) return;
    const priority = taskPriority.value || "medium";
    const due = taskDue.value || "";

    state.tasks.unshift({ title, priority, due, completed: false });
    taskTitle.value = "";
    taskDue.value = "";
    taskPriority.value = "medium";

    renderTasks();
  });
}

filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    filterChips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    currentFilter = chip.getAttribute("data-filter") || "all";
    renderTasks();
  });
});

// Notes
const noteForm = document.getElementById("note-form");
const noteTitle = document.getElementById("note-title");
const noteBody = document.getElementById("note-body");
const noteList = document.getElementById("note-list");
const notesCount = document.getElementById("notes-count");

function renderNotes() {
  if (!noteList) return;
  noteList.innerHTML = "";

  state.notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.className = "note-item";

    const title = document.createElement("div");
    title.className = "note-title";
    title.textContent = note.title;

    const body = document.createElement("div");
    body.className = "note-body";
    body.textContent = note.body || "No content";

    const footer = document.createElement("div");
    footer.className = "note-footer";

    const date = document.createElement("span");
    date.textContent = note.createdAt;

    const actions = document.createElement("div");
    actions.className = "note-actions";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "note-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      state.notes.splice(index, 1);
      renderNotes();
    });

    actions.appendChild(deleteBtn);
    footer.appendChild(date);
    footer.appendChild(actions);

    li.appendChild(title);
    li.appendChild(body);
    li.appendChild(footer);
    noteList.appendChild(li);
  });

  if (notesCount) {
    const total = state.notes.length;
    notesCount.textContent = `${total} note${total === 1 ? "" : "s"}`;
  }
}

if (noteForm && noteTitle && noteBody) {
  noteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = noteTitle.value.trim();
    const body = noteBody.value.trim();
    if (!title && !body) return;
    const createdAt = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    state.notes.unshift({ title: title || "Untitled", body, createdAt });
    noteTitle.value = "";
    noteBody.value = "";
    renderNotes();
  });
}

// Stats + reflection
const statTasksCompleted = document.getElementById("stat-tasks-completed");
const statTasksRemaining = document.getElementById("stat-tasks-remaining");
const statFocusSessions = document.getElementById("stat-focus-sessions");
const reflectionInput = document.getElementById("reflection-input");
const saveReflectionBtn = document.getElementById("save-reflection");
const reflectionStatus = document.getElementById("reflection-status");

function updateStats() {
  const completed =
    state.quickTasks.filter((t) => t.completed).length +
    state.tasks.filter((t) => t.completed).length;

  const remaining =
    state.quickTasks.filter((t) => !t.completed).length +
    state.tasks.filter((t) => !t.completed).length;

  if (statTasksCompleted) statTasksCompleted.textContent = String(completed);
  if (statTasksRemaining) statTasksRemaining.textContent = String(remaining);
  if (statFocusSessions)
    statFocusSessions.textContent = String(state.stats.focusSessions);
}

if (saveReflectionBtn && reflectionInput && reflectionStatus) {
  saveReflectionBtn.addEventListener("click", () => {
    const text = reflectionInput.value.trim();
    if (!text) {
      reflectionStatus.textContent = "Write something before saving.";
      reflectionStatus.style.color = "#f97373";
      return;
    }
    reflectionStatus.textContent = "Reflection saved (locally in this session).";
    reflectionStatus.style.color = "#4ade80";
    setTimeout(() => {
      reflectionStatus.textContent = "";
    }, 2500);
  });
}

// Initial renders
renderQuickTasks();
renderTasks();
renderNotes();
updateStats();
