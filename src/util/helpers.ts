export function formatDate(time: number) {
    return new Date(time * 1000).toLocaleDateString("en-US", {
        hour: "numeric",
        minute: "numeric"
    })
}

export function getDocHeight() {
    return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
};