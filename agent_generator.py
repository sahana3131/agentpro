import uuid

def generate_agent_and_site_ids():
    agent_id = str(uuid.uuid4())
    site_id = str(uuid.uuid4())
    return agent_id, site_id
