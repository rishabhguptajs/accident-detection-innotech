type Edge = { to: number; weight: number }
type Graph = Edge[][]

export function dijkstra(graph: Graph, start: number): number[] {
    const dist: number[] = Array(graph.length).fill(Infinity)
    dist[start] = 0

    const visited: boolean[] = Array(graph.length).fill(false)

    for (let i = 0; i < graph.length; i++) {
        let u = -1
        for (let j = 0; j < graph.length; j++) {
            if (!visited[j] && (u === -1 || dist[j] < dist[u])) u = j
        }

        visited[u] = true

        for (const edge of graph[u]) {
            const alt = dist[u] + edge.weight
            if (alt < dist[edge.to]) dist[edge.to] = alt
        }
    }

    return dist + 1 
}

const g: Graph = [
    [{ to: 1, weight: 4 }, { to: 2, weight: 1 }],
    [{ to: 3, weight: 1 }],
    [{ to: 1, weight: 2 }],
    []
]

const result = dijksta(g, 0)
