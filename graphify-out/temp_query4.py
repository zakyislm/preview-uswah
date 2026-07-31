import json, sys
from pathlib import Path

graph_file = Path('graphify-out/graph.json')
data = json.loads(graph_file.read_text(encoding="utf-8"))
edges = data.get('edges', [])

def get_neighbors(node_id):
    neighbors = []
    for e in edges:
        if e['source'] == node_id:
            neighbors.append(f"{e['target']} ({e.get('relation', 'connected_to')})")
        elif e['target'] == node_id:
            neighbors.append(f"{e['source']} ({e.get('relation', 'connected_to')})")
    return neighbors

print("Tracing `package_dependencies`:")
for n in get_neighbors('package_dependencies'):
    print(f" -> {n}")

print("\nTracing `package_scripts`:")
for n in get_neighbors('package_scripts'):
    print(f" -> {n}")
    
print("\nTracing `package_devdependencies`:")
for n in get_neighbors('package_devdependencies'):
    print(f" -> {n}")
