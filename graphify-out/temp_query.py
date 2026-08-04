import json, sys
from pathlib import Path

graph_file = Path('graphify-out/graph.json')
if not graph_file.exists():
    print("Graph not found.")
    sys.exit(1)

data = json.loads(graph_file.read_text(encoding="utf-8"))
nodes = {n['id']: n for n in data.get('nodes', [])}
edges = data.get('edges', [])

print("Edges connected to 'package_dependencies':")
for e in edges:
    if e['source'] == 'package_dependencies' or e['target'] == 'package_dependencies':
        print(f"{e['source']} --{e.get('relation', 'connected_to')}--> {e['target']}")

print("\nEdges connected to 'package_scripts':")
for e in edges:
    if e['source'] == 'package_scripts' or e['target'] == 'package_scripts':
        print(f"{e['source']} --{e.get('relation', 'connected_to')}--> {e['target']}")
