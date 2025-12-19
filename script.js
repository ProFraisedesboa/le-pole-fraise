function copyIP() {
    const ip = document.getElementById("serverIP");
    ip.select();
    ip.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(ip.value);
    alert("IP copiée !");
}
