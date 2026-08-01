// i18n — Carino Kanban. Fleet convention (reference: Topo/js/i18n.js).
// English source strings ARE the keys, so a missing entry falls back to
// English. Locale is resolved by carino-lang.js (?lang > fleet cookie >
// browser language > en); this file only reacts to it. Japanese says "PC",
// never コンピューター. Loaded deferred, AFTER carino-lang.js.

const I18N = {
    es: {
        // Toolbar
        'Enter task name...': 'Nombre de la tarea...',
        '+ Create': '+ Crear',
        'Copy Link': 'Copiar enlace',
        'Reset': 'Reiniciar',
        'About': 'Acerca de',
        '✓ Copied': '✓ Copiado',
        'Copy failed': 'Error al copiar',
        'Sure? Click again': '¿Seguro? Clic de nuevo',
        // Columns & cards
        'TODO': 'Por hacer',
        'IN PROGRESS': 'En curso',
        'DONE': 'Hecho',
        'DO': 'Hacer',
        'No cards': 'Sin tarjetas',
        'Untitled': 'Sin título',
        '+ Step': '+ Paso',
        'Step': 'Paso',
        'Steps': 'Pasos',
        'Delete task': 'Eliminar tarea',
        'over by': 'vencido hace',
        'left': 'restante',
        // About modal
        "A portable task manager. No databases, no logins. Every change is encoded into the URL, so a bookmark is your database and a link is your share. The latest board is also mirrored to this browser's local storage as a safety net.":
            'Un gestor de tareas portátil. Sin bases de datos ni inicios de sesión. Cada cambio se codifica en la URL, así que un marcador es tu base de datos y un enlace es tu forma de compartir. El tablero más reciente también se refleja en el almacenamiento local de este navegador como red de seguridad.',
        'Drag cards between columns · Enter to create · Titles and steps are click-to-edit':
            'Arrastra tarjetas entre columnas · Enter para crear · Títulos y pasos se editan con un clic',
        'Close': 'Cerrar',
    },
    'pt-BR': {
        'Enter task name...': 'Nome da tarefa...',
        '+ Create': '+ Criar',
        'Copy Link': 'Copiar link',
        'Reset': 'Redefinir',
        'About': 'Sobre',
        '✓ Copied': '✓ Copiado',
        'Copy failed': 'Falha ao copiar',
        'Sure? Click again': 'Certeza? Clique de novo',
        'TODO': 'A fazer',
        'IN PROGRESS': 'Em andamento',
        'DONE': 'Concluído',
        'DO': 'Fazer',
        'No cards': 'Sem cartões',
        'Untitled': 'Sem título',
        '+ Step': '+ Etapa',
        'Step': 'Etapa',
        'Steps': 'Etapas',
        'Delete task': 'Excluir tarefa',
        'over by': 'atrasado há',
        'left': 'restante',
        "A portable task manager. No databases, no logins. Every change is encoded into the URL, so a bookmark is your database and a link is your share. The latest board is also mirrored to this browser's local storage as a safety net.":
            'Um gerenciador de tarefas portátil. Sem banco de dados, sem login. Cada alteração é codificada na URL: um favorito é seu banco de dados e um link é seu jeito de compartilhar. O quadro mais recente também é espelhado no armazenamento local deste navegador como rede de segurança.',
        'Drag cards between columns · Enter to create · Titles and steps are click-to-edit':
            'Arraste cartões entre colunas · Enter para criar · Títulos e etapas se editam com um clique',
        'Close': 'Fechar',
    },
    ja: {
        'Enter task name...': 'タスク名を入力...',
        '+ Create': '+ 作成',
        'Copy Link': 'リンクをコピー',
        'Reset': 'リセット',
        'About': '概要',
        '✓ Copied': '✓ コピーしました',
        'Copy failed': 'コピー失敗',
        'Sure? Click again': '本当に？もう一度クリック',
        'TODO': '未着手',
        'IN PROGRESS': '進行中',
        'DONE': '完了',
        'DO': '着手',
        'No cards': 'カードなし',
        'Untitled': '無題',
        '+ Step': '+ ステップ',
        'Step': 'ステップ',
        'Steps': 'ステップ',
        'Delete task': 'タスクを削除',
        'over by': '超過',
        'left': '残り',
        "A portable task manager. No databases, no logins. Every change is encoded into the URL, so a bookmark is your database and a link is your share. The latest board is also mirrored to this browser's local storage as a safety net.":
            'ポータブルなタスク管理ツール。データベースもログインも不要。すべての変更はURLに符号化されるため、ブックマークがデータベースになり、リンクがそのまま共有になります。最新のボードは安全策としてこのブラウザーのローカルストレージにも保存されます。',
        'Drag cards between columns · Enter to create · Titles and steps are click-to-edit':
            'カードは列間でドラッグ · Enterで作成 · タイトルとステップはクリックで編集',
        'Close': '閉じる',
    },
    ru: {
        'Enter task name...': 'Название задачи...',
        '+ Create': '+ Создать',
        'Copy Link': 'Копировать ссылку',
        'Reset': 'Сброс',
        'About': 'О приложении',
        '✓ Copied': '✓ Скопировано',
        'Copy failed': 'Не удалось скопировать',
        'Sure? Click again': 'Точно? Нажмите ещё раз',
        'TODO': 'Сделать',
        'IN PROGRESS': 'В работе',
        'DONE': 'Готово',
        'DO': 'В работу',
        'No cards': 'Нет карточек',
        'Untitled': 'Без названия',
        '+ Step': '+ Шаг',
        'Step': 'Шаг',
        'Steps': 'Шаги',
        'Delete task': 'Удалить задачу',
        'over by': 'просрочено на',
        'left': 'осталось',
        "A portable task manager. No databases, no logins. Every change is encoded into the URL, so a bookmark is your database and a link is your share. The latest board is also mirrored to this browser's local storage as a safety net.":
            'Портативный менеджер задач. Без баз данных и без входа в систему. Каждое изменение кодируется в URL: закладка — это ваша база данных, а ссылка — способ поделиться. Последняя версия доски также дублируется в локальном хранилище этого браузера как подстраховка.',
        'Drag cards between columns · Enter to create · Titles and steps are click-to-edit':
            'Перетаскивайте карточки между колонками · Enter — создать · Заголовки и шаги редактируются по клику',
        'Close': 'Закрыть',
    },
};

let LOCALE = 'en';

function currentFleetLang() { return (window.CarinoLang && window.CarinoLang.current) || 'en'; }

function t(key) {
    const dict = I18N[LOCALE];
    return (dict && dict[key]) || key;
}

// Static markup: elements carrying data-i18n use their original English text
// as the key (captured on first pass so locale switches stay reversible).
function applyStaticI18n() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        if (!el.dataset.i18nKey) el.dataset.i18nKey = el.textContent.trim();
        el.textContent = t(el.dataset.i18nKey);
    });
}

// Prominent attributes + CSS-generated text (explicit assignments, not data-i18n).
function applyAttrI18n() {
    const taskIn = document.getElementById('taskIn');
    if (taskIn) taskIn.placeholder = t('Enter task name...');
    const aboutX = document.getElementById('btnAboutX');
    if (aboutX) aboutX.setAttribute('aria-label', t('Close'));
    // "Untitled" lives in a CSS ::before rule — override it per locale.
    let style = document.getElementById('i18nDynamicCss');
    if (!style) {
        style = document.createElement('style');
        style.id = 'i18nDynamicCss';
        document.head.appendChild(style);
    }
    style.textContent = '.title:empty::before { content: ' + JSON.stringify(t('Untitled')) + '; }';
}

function applyI18n() {
    const lang = currentFleetLang();
    LOCALE = (lang === 'en' || I18N[lang]) ? lang : 'en';
    document.documentElement.lang = LOCALE;
    applyStaticI18n();
    applyAttrI18n();
    // Re-render the board so JS-generated strings pick up the locale.
    if (typeof window.render === 'function') window.render();
}

// Bridge for the inline board script (which runs before this file).
window.CarinoI18N = { t };

// carino-lang.js is deferred and runs before this deferred script, so
// CarinoLang exists by DOMContentLoaded.
document.addEventListener('DOMContentLoaded', applyI18n);
window.addEventListener('carino:langchange', applyI18n);
