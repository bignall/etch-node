/**
 * If the button has a data-copy-url attribute it will fetch that
 * resource and copy its contents. Otherwise it looks for a nearby
 * <code> element and copies its innerText.
 */
async function copyFromUrl(url) {
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`Unable to fetch ${url}: ${resp.status}`);

    const text = await resp.text();
    await navigator.clipboard.writeText(text);
    console.log(`Copied contents of ${url} to clipboard`);
  } catch (err) {
    console.error('copyFromUrl error:', err);
  }
}

document.addEventListener('click', e => {
  const btn = e.target.closest('.copy-btn');
  if (!btn) return;

  const url = btn.getAttribute('data-copy-url');
  if (url) {
    copyFromUrl(url);
  } else {
    const code = btn.closest('.code-block').querySelector('code').innerText;
    navigator.clipboard.writeText(code);
  }
});