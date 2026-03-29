export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (url.pathname === "/api/views") {
      let views = await env.MY_KV.get("views");
      views = views ? parseInt(views) + 1 : 1;
      await env.MY_KV.put("views", views.toString());
      
      return new Response(JSON.stringify({ views }), {
        headers: { "Content-Type": "application/json" }
      });
    }
    
    return new Response("Hello!");
  }
}
