window.ymId = 96951425;

export default function sendGoal(name: string, isWin?: boolean): void {
    if (!window.ym) {
        return;
    }

    if (isWin && localStorage.getItem('utmSource') !== 'winbox') {
        return;
    }

    name.split(',').forEach((key) => {
        window.ym!(window.ymId, 'reachGoal', key.replace(/\s/gi, ''));
    });
}
