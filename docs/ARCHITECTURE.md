# End-to-End DevOps Architecture (ShopEasy)

```mermaid
flowchart LR
  subgraph Plan
    J[Jira Scrum board<br/>backlog, sprint, stories]
  end
  subgraph Code
    D[Developer] -->|feature/SHOP-n branch| G[GitHub repository]
    G -->|pull request + merge| M[main branch]
  end
  subgraph CICD[GitHub Actions]
    B[Build and test<br/>npm run build, npm test] --> I[Docker image build]
    I --> C[Deploy with Docker Compose<br/>+ smoke test]
  end
  subgraph Run[Docker Compose stack]
    W[nginx web container<br/>ShopEasy :8080]
    E[nginx-prometheus-exporter :9113]
    P[Prometheus :9090]
    GF[Grafana :3000]
    W -->|stub_status| E -->|scraped every 5s| P --> GF
  end
  J -. issue keys in branches and commits .-> G
  M -->|triggers| B
  C --> W
  U[User browser] --> W
  GF -->|dashboards| Ops[Developer / Ops]
```

| Stage | Tool | Evidence to screenshot |
|---|---|---|
| Plan | Jira (Scrum) | Sprint board, backlog |
| Version control | Git + GitHub | Branches, pull requests, merge history |
| CI/CD | GitHub Actions | Green run with the 3 jobs |
| Containerise and deploy | Docker + Docker Compose | `docker compose ps`, app on :8080 |
| Monitor | Prometheus + Grafana | Targets page (UP), ShopEasy dashboard |
