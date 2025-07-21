document.addEventListener('DOMContentLoaded', function() {
    const getTitleBtn = document.getElementById('getTitleBtn');
    const titleDisplay = document.getElementById('titleDisplay');

    getTitleBtn.addEventListener('click', async function() {
        try {
            // Show loading state
            titleDisplay.innerHTML = '<div class="loading">Getting tab title...</div>';
            
            // Query for the active tab in the current window
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            
            if (tab && tab.title) {
                // Display the tab title with animation
                titleDisplay.innerHTML = `
                    <div class="title-text">
                        <strong>Tab Title:</strong><br>
                        ${tab.title}
                    </div>
                `;
            } else {
                titleDisplay.innerHTML = '<div class="loading">Could not get tab title</div>';
            }
        } catch (error) {
            console.error('Error getting tab title:', error);
            titleDisplay.innerHTML = '<div class="loading">Error: Could not access tab information</div>';
        }
    });
});