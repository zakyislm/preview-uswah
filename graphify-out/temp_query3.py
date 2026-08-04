import json, sys
from pathlib import Path

graph_file = Path('graphify-out/graph.json')
data = json.loads(graph_file.read_text(encoding="utf-8"))
nodes = data.get('nodes', [])

for n in nodes:
    if 'depend' in n['id'].lower() or 'script' in n['id'].lower():
        print(f"Node: {n['id']}")
