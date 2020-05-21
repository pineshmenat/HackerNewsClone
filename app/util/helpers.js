export function formatDate(time) {
    return new Date(time * 1000).toLocaleDateString("en-US", {
        hour: "numeric",
        minute: "numeric"
    })
}