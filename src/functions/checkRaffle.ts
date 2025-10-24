import getSavedRaffle from '../views/root/pages/rafflePrize/utils/getSavedRaffle';

export default function checkRaffle(): void {
    const { prize: rafflePrize, name } = getSavedRaffle();

    if (rafflePrize && rafflePrize.date < new Date().getTime() - 24 * 60 * 60_000) {
        localStorage.removeItem(name);
    }

    setTimeout(checkRaffle, 60_000);
}
