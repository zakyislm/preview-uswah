import json, sys
from pathlib import Path

graph_file = Path('graphify-out/graph.json')
data = json.loads(graph_file.read_text(encoding="utf-8"))
edges = data.get('edges', [])

print("Edges related to dependencies or scripts:")
for e in edges:
    if 'dependencies' in e['source'] or 'dependencies' in e['target'] or 'scripts' in e['source'] or 'scripts' in e['target']:
        print(f"{e['source']} --{e.get('relation', 'connected_to')}--> {e['target']}")
