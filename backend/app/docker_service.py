import docker

client = docker.from_env()

def get_containers():
    containers = client.containers.list(all=True)
    return [
        {
            "id": container.id,
            "name": container.name,
            "status": container.status,
            "image": container.image.tags[0] if container.image.tags else "unknown",
            "created": container.attrs["Created"],
        }
        for container in containers
    ]

def get_container_stats():
    stats = []
    for container in client.containers.list():
        container_stats = container.stats(stream=False)
        stats.append({
            "id": container.id,
            "name": container.name,
            "cpu": container_stats["cpu_stats"]["cpu_usage"]["total_usage"],
            "memory": container_stats["memory_stats"]["usage"],
            "timestamp": container_stats["read"]
        })
    return stats
