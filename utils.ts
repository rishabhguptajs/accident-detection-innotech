export type Edge = { node: string; weight: number }

export type Graph = Record<string, Edge[]>

export const createGraph = (): Graph => ({})

export const addNode = (graph: Graph, node: string) => {
  if (!graph[node]) graph[node] = []
}

export const addEdge = (graph: Graph, from: string, to: string, weight: number) => {
  if (!graph[from]) graph[from] = []
  graph[from].push({ node: to, weight })
}

export const extractMin = (dist: Record<string, number>, visited: Set<string>) => {
  let minNode = null
  let minDist = Infinity
  for (const node in dist) {
    if (!visited.has(node) && dist[node] < minDist) {
      minDist = dist[node]
      minNode = node
    }
  }
  return minNode
}
