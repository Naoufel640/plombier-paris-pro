
export async function GET(){
  return new Response(
`User-agent: *
Allow: /

Sitemap: https://www.plombier-paris-pro.fr/sitemap.xml
`, { headers: { "Content-Type":"text/plain" } });
}
