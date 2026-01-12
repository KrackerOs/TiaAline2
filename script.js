// 1. Alternar Tema (Dark Mode)
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Altera o ícone do botão
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
});

// 2. Copiar PIX para área de transferência
function copyPix() {
    const pixKey = "11954054007"; // Troque pela sua chave
    navigator.clipboard.writeText(pixKey).then(() => {
        alert("Chave PIX copiada com sucesso!");
    });
}

// 3. Mostrar/Esconder Informações de Contato
function toggleContact() {
    const details = document.getElementById('contact-details');
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
    } else {
        details.classList.add('hidden');
    }
}