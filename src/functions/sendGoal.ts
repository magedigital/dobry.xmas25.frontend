window.ymId = 96951425;

export default function sendGoal(name: string): void {
    if (window.ym) {
        name.split(',').forEach((key) => {
            window.ym!(window.ymId, 'reachGoal', key);
        });
    }
}
