import docker

client = docker.from_env()

def get_containers():
    containers = client.containers.list()
    return [
        {
            "id": container.id,
            "name": container.name,
            "status": container.status,
            "image": container.image.tags[0] if container.image.tags else "N/A",
            "created": container.attrs["Created"]
        }
        for container in containers
    ]
