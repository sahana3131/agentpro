def generate_script_tag(agent_id, site_id):
    return f"""
<script src="https://yourdomain.com/agent.js"
        data-agent-id="{agent_id}"
        data-site-id="{site_id}">
</script>
""".strip()
