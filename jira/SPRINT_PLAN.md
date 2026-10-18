# Sprint 1 plan (ShopEasy DevOps Pipeline)

Sprint goal: ship a containerised ShopEasy app with automated CI/CD and live monitoring.
Duration: 1 week (edit the dates in Jira when you start the sprint).

## How to set it up in Jira
1. Create a Scrum project (key e.g. SHOP).
2. Import `backlog.csv` (Settings > System > External System Import > CSV). Map Summary, Issue Type, Priority, Description, Labels and Story Points.
3. Create Sprint 1, drag the stories and tasks in, and click Start sprint.
4. Move issues To Do > In Progress > Done as you work. Take a board screenshot at the start, the middle and the end.
5. Name every Git branch after its issue key, for example `feature/SHOP-7-dockerfile`, and mention the key in commit messages and pull request titles.

## Suggested Git workflow
- `main` is protected: change it only through pull requests.
- One branch per issue, one pull request per branch, CI must be green before merging.
