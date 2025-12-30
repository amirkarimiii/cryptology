export const formatNumber = (
    input: number | string,
    { isCurrency = false, decimals }: { isCurrency?: boolean; decimals?: number } = {}
): string => {

    const num = typeof input === 'string' ? parseFloat(input) : input;

    if (isNaN(num) || num === null || num === undefined) {
        return "-";
    }

    const abs = Math.abs(num);
    let formatted = "";

    if (decimals !== undefined) {
        if (abs >= 1e12) formatted = (num / 1e12).toFixed(decimals) + "T";
        else if (abs >= 1e9) formatted = (num / 1e9).toFixed(decimals) + "B";
        else if (abs >= 1e6) formatted = (num / 1e6).toFixed(decimals) + "M";
        else formatted = num.toLocaleString(undefined, {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
            });
    } else {
        formatted = num.toLocaleString();
    }

    return isCurrency ? `$${formatted}` : formatted;
};
