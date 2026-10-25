// i18n — Carino Kanban. Fleet convention (reference: Topo/js/i18n.js).
// English source strings ARE the keys, so a missing entry falls back to
// English. Locale is resolved by carino-lang.js (?lang > fleet cookie >
// browser language > en); this file only reacts to it. Japanese says "PC",
// never コンピューター. Loaded deferred, AFTER carino-lang.js.

const I18N = {
    es: {
        // Page-type homologation (short hero, export menu, privacy line)
        "Copy link": "Copiar enlace",
        "holds the board": "contiene el tablero",
        "Reset the board…": "Reiniciar el tablero…",
        "Reset the board": "Reiniciar el tablero",
        "This removes every card from this board and from this browser. A link you copied earlier still opens the old board.": "Esto quita todas las tarjetas de este tablero y de este navegador. Un enlace que copiaste antes sigue abriendo el tablero anterior.",
        "Board reset": "Tablero reiniciado",
        "✓ Link copied — it holds the whole board": "✓ Enlace copiado: contiene todo el tablero",
        "Plan the work.": "Planifica el trabajo.",
        "Keep the board in its link.": "Guarda el tablero en su enlace.",
        "Add a card and move it from To do to Done. Bookmark the page or send the link, and the whole board goes with it.": "Añade una tarjeta y muévela de Por hacer a Hecho. Guarda la página en favoritos o envía el enlace, y todo el tablero va con él.",
        "Add card": "Añadir tarjeta",
        "Open the example board": "Abrir el tablero de ejemplo",
        "The board lives in its link and in this browser.": "El tablero vive en su enlace y en este navegador.",
        "Task name": "Nombre de la tarea",
        "Example": "Ejemplo",
        "Write the project brief": "Redactar el resumen del proyecto",
        "List the goals": "Enumerar los objetivos",
        "Agree the budget": "Acordar el presupuesto",
        "Book the kickoff meeting": "Agendar la reunión de arranque",
        "Draft the first design": "Bosquejar el primer diseño",
        "Sketch": "Boceto",
        "Review": "Revisión",
        "Revise": "Corregir",
        "Set up the board": "Preparar el tablero",
        "Runs in your browser. Nothing you add here is uploaded.": "Funciona en tu navegador. Nada de lo que añades aquí se sube.",
        "Try:": "Prueba:",
        "Export": "Exportar",
        "More": "Más",
        "Help": "Ayuda",
        "Cancel": "Cancelar",
        'Late shift.': 'Turno nocturno.',
        'Good morning.': 'Buenos días.',
        'Good afternoon.': 'Buenas tardes.',
        'Good evening.': 'Buenas noches.',
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
        // Page-type homologation (short hero, export menu, privacy line)
        "Copy link": "Copiar link",
        "holds the board": "contém o quadro",
        "Reset the board…": "Zerar o quadro…",
        "Reset the board": "Zerar o quadro",
        "This removes every card from this board and from this browser. A link you copied earlier still opens the old board.": "Isso remove todos os cartões deste quadro e deste navegador. Um link que você copiou antes continua abrindo o quadro antigo.",
        "Board reset": "Quadro zerado",
        "✓ Link copied — it holds the whole board": "✓ Link copiado: ele contém o quadro inteiro",
        "Plan the work.": "Planeje o trabalho.",
        "Keep the board in its link.": "Guarde o quadro no próprio link.",
        "Add a card and move it from To do to Done. Bookmark the page or send the link, and the whole board goes with it.": "Adicione um cartão e mova-o de A fazer para Concluído. Salve a página nos favoritos ou envie o link, e o quadro inteiro vai junto.",
        "Add card": "Adicionar cartão",
        "Open the example board": "Abrir o quadro de exemplo",
        "The board lives in its link and in this browser.": "O quadro fica no link e neste navegador.",
        "Task name": "Nome da tarefa",
        "Example": "Exemplo",
        "Write the project brief": "Escrever o briefing do projeto",
        "List the goals": "Listar os objetivos",
        "Agree the budget": "Fechar o orçamento",
        "Book the kickoff meeting": "Marcar a reunião de abertura",
        "Draft the first design": "Rascunhar o primeiro design",
        "Sketch": "Esboço",
        "Review": "Revisão",
        "Revise": "Ajustar",
        "Set up the board": "Montar o quadro",
        "Runs in your browser. Nothing you add here is uploaded.": "Roda no seu navegador. Nada do que você adiciona aqui é enviado.",
        "Try:": "Experimente:",
        "Export": "Exportar",
        "More": "Mais",
        "Help": "Ajuda",
        "Cancel": "Cancelar",
        'Late shift.': 'Turno da noite.',
        'Good morning.': 'Bom dia.',
        'Good afternoon.': 'Boa tarde.',
        'Good evening.': 'Boa noite.',
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
        // Page-type homologation (short hero, export menu, privacy line)
        "Copy link": "リンクをコピー",
        "holds the board": "ボード全体を含む",
        "Reset the board…": "ボードをリセット…",
        "Reset the board": "ボードをリセット",
        "This removes every card from this board and from this browser. A link you copied earlier still opens the old board.": "このボードとこのブラウザからすべてのカードを削除します。以前にコピーしたリンクを開くと、古いボードが表示されます。",
        "Board reset": "ボードをリセットしました",
        "✓ Link copied — it holds the whole board": "✓ リンクをコピーしました。ボード全体が含まれます",
        "Plan the work.": "作業を計画し、",
        "Keep the board in its link.": "ボードはリンクに保存。",
        "Add a card and move it from To do to Done. Bookmark the page or send the link, and the whole board goes with it.": "カードを追加して、「未着手」から「完了」へ動かします。ページをブックマークするかリンクを送れば、ボード全体が一緒に届きます。",
        "Add card": "カードを追加",
        "Open the example board": "サンプルのボードを開く",
        "The board lives in its link and in this browser.": "ボードはリンクとこのブラウザに保存されます。",
        "Task name": "タスク名",
        "Example": "サンプル",
        "Write the project brief": "プロジェクト概要を書く",
        "List the goals": "目標を書き出す",
        "Agree the budget": "予算を決める",
        "Book the kickoff meeting": "キックオフ会議を予約する",
        "Draft the first design": "最初のデザイン案を作る",
        "Sketch": "スケッチ",
        "Review": "レビュー",
        "Revise": "修正",
        "Set up the board": "ボードを用意する",
        "Runs in your browser. Nothing you add here is uploaded.": "ブラウザ内で動作します。ここに追加したものはアップロードされません。",
        "Try:": "例:",
        "Export": "書き出す",
        "More": "その他",
        "Help": "ヘルプ",
        "Cancel": "キャンセル",
        'Late shift.': '夜勤お疲れさま。',
        'Good morning.': 'おはようございます。',
        'Good afternoon.': 'こんにちは。',
        'Good evening.': 'こんばんは。',
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
        // Page-type homologation (short hero, export menu, privacy line)
        "Copy link": "Копировать ссылку",
        "holds the board": "содержит доску",
        "Reset the board…": "Очистить доску…",
        "Reset the board": "Очистить доску",
        "This removes every card from this board and from this browser. A link you copied earlier still opens the old board.": "Все карточки будут удалены с этой доски и из этого браузера. Ранее скопированная ссылка по-прежнему открывает старую доску.",
        "Board reset": "Доска очищена",
        "✓ Link copied — it holds the whole board": "✓ Ссылка скопирована — в ней вся доска",
        "Plan the work.": "Планируйте работу.",
        "Keep the board in its link.": "Доска хранится в ссылке.",
        "Add a card and move it from To do to Done. Bookmark the page or send the link, and the whole board goes with it.": "Добавьте карточку и перемещайте её от «Сделать» до «Готово». Добавьте страницу в закладки или отправьте ссылку — вся доска передаётся вместе с ней.",
        "Add card": "Добавить карточку",
        "Open the example board": "Открыть пример доски",
        "The board lives in its link and in this browser.": "Доска хранится в ссылке и в этом браузере.",
        "Task name": "Название задачи",
        "Example": "Пример",
        "Write the project brief": "Написать бриф проекта",
        "List the goals": "Перечислить цели",
        "Agree the budget": "Согласовать бюджет",
        "Book the kickoff meeting": "Назначить стартовую встречу",
        "Draft the first design": "Набросать первый дизайн",
        "Sketch": "Эскиз",
        "Review": "Проверка",
        "Revise": "Доработка",
        "Set up the board": "Настроить доску",
        "Runs in your browser. Nothing you add here is uploaded.": "Работает в вашем браузере. Ничего из добавленного сюда не загружается.",
        "Try:": "Попробуйте:",
        "Export": "Экспорт",
        "More": "Ещё",
        "Help": "Справка",
        "Cancel": "Отмена",
        'Late shift.': 'Ночная смена.',
        'Good morning.': 'Доброе утро.',
        'Good afternoon.': 'Добрый день.',
        'Good evening.': 'Добрый вечер.',
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
    ['taskIn', 'heroTaskIn'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) { el.placeholder = t('Enter task name...'); el.setAttribute('aria-label', t('Task name')); }
    });
    const help = document.getElementById('btnAbout');
    if (help) { help.title = t('Help'); help.setAttribute('aria-label', t('Help')); }
    ['btnAboutX', 'btnResetX'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.setAttribute('aria-label', t('Close'));
    });
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
