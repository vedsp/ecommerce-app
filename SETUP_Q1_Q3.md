# Q1 and Q3 setup (copy these files into your ecommerce-app repo root)

Copy: Dockerfile, .dockerignore, docker-compose.yml, docker-compose.monitoring.yml, nginx/, monitoring/, docs/, jira/, .github/workflows/ci-cd.yml
Your own app.js, index.html, style.css, package.json, test/ and scripts/ stay as they are.
Your old workflow in .github/workflows/ can stay (it will run too) or be deleted to avoid two runs.

## Run locally (Q1)
    docker compose up -d --build
    open http://localhost:8080
    docker compose ps

## Run with monitoring (Q3)
    docker compose -f docker-compose.yml -f docker-compose.monitoring.yml up -d --build
    App         http://localhost:8080
    Prometheus  http://localhost:9090   (Status > Targets: both UP; query nginx_up)
    Grafana     http://localhost:3000   (admin / admin) > Dashboards > ShopEasy - nginx Overview
Click around the shop or refresh the page a few times so the graphs move.
Stop: add `down` instead of `up -d --build` (same -f flags).

## Push
    git checkout -b feature/devops-pipeline
    git add . && git commit -m "Add Docker, Compose, CI/CD and monitoring"
    git push -u origin feature/devops-pipeline
Open a pull request, let the Actions run go green, merge to main.
