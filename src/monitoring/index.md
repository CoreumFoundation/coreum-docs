# Monitoring

Monitoring `cored` instances is achieved through the use of [Prometheus](https://prometheus.io), and [Grafana](https://grafana.com). This monitoring feature is presetned as a docker compose bundle, which orchestrates both the prometheus scraper, and the grafana observability platform.

As of right now, Tenderming metrics are scraped and shown in the graphs. A list of available metrics can be found [here](https://docs.tendermint.com/master/nodes/metrics.html).

## Pre-Requisites

Please ensure that you have [docker](https://docker.com) installed and running.

Tendermint exposes a port for Prometheus, which by default is set to `26660`. Please ensure that there are no other processes requiring this port.

## Running the Monitoring Service

If the prerequisites have been met, the bundle can be started by running

```
docker-compose up -d
```

Then, navigate to `http://localhost:3100/d/UJyurCTWz/coreum-network-monitoring?orgId=1&from=now-5m&to=now&refresh=1s` to access the frontend application.

## Stopping the Monitoring Service

The Monitoring Service may be stopped by simply running

```
docker-compose down
```

## Notes

The `docker-compose` command is only meaningful when executed in the root folder of this repository. Hence, both the start (`docker-compose up -d`) and stop (`docker-compose down`) commands must be run in the root folder of this repository.
