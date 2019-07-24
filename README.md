# Awesome Zeebe

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Contribute](https://img.shields.io/badge/contribute-project-blue.svg)](https://github.com/zeebe-io/awesome-zeebe/pulls)

A curated list of awesome [Zeebe](https://zeebe.io) clients, workers and applications. Inspired by [awesome-go](https://github.com/avelino/awesome-go).

### Contributing

Contributions are welcome, if you build something awesome with Zeebe please let us know. Take a quick gander at the [contribution guidelines](https://github.com/zeebe-io/awesome-zeebe/blob/master/CONTRIBUTING.md) first.

*If you see a package or project here that is no longer maintained or is not a good fit, please submit a pull request to improve this file. Thank you!*


### Contents

- [Awesome Zeebe](#awesome-zeebe)
    - [Clients](#clients)
    - [Workers](#workers)
    - [Exporters](#exporters)
    - [Applications](#applications)
    - [Others](#others)


## Clients

*Libraries to interact with Zeebe*

- [Java](https://github.com/zeebe-io/zeebe/tree/master/clients/java)
- [Go](https://github.com/zeebe-io/zeebe/tree/master/clients/go)
- [C#](https://github.com/zeebe-io/zeebe-client-csharp)
- [Ruby](https://github.com/zeebe-io/zeebe-client-ruby)
- [Node.js](https://github.com/CreditSenseAU/zeebe-client-node-js)
- [Rust](https://github.com/xmclark/zeebest)
- [WorkIt](https://github.com/VilledeMontreal/workit) - Node.js (TypeScript) client for both Zeebe and Camunda BPM platforms


## Workers

*Generic Zeebe job workers to complete tasks*

- [Script](https://github.com/zeebe-io/zeebe-script-worker) - Zeebe job worker for evaluating JS, Groovy, and FEEL scripts
- [DMN Scala](https://github.com/camunda/dmn-scala/tree/master/zeebe-worker) - Zeebe job worker using the [Scala DMN engine](https://github.com/camunda/dmn-scala)
- [Camunda DMN](https://github.com/zeebe-io/zeebe-dmn-worker) - Zeebe job worker using the [Camunda DMN engine](https://github.com/camunda/camunda-engine-dmn)
- [HTTP](https://github.com/zeebe-io/zeebe-http-worker) - Zeebe job worker for making HTTP calls
- [User](https://github.com/zeebe-io/zeebe-simple-tasklist) - Zeebe job worker for manual/user tasks

## Exporters

*Exporters to load data into external systems*

- [Elasticsearch](https://github.com/zeebe-io/zeebe/tree/master/exporters/elasticsearch-exporter)
- [Event Store](https://github.com/jwulf/zeebe-eventstore-exporter)
- [Hazelcast](https://github.com/zeebe-io/zeebe-hazelcast-exporter)
- [Kafka](https://github.com/zeebe-io/zeebe-kafka-exporter)
- [CSV](https://github.com/zeebe-io/zeebe-csv-exporter)

## Applications

*Applications to interact with Zeebe*

- [Simple Monitor](https://github.com/zeebe-io/zeebe-simple-monitor) - A lightweight application for monitoring and interacting with Zeebe during development
- [Modeler](https://github.com/zeebe-io/zeebe-modeler) - Use Zeebe Modeler to model your workflow in a desktop application
- [zbctl](https://github.com/zeebe-io/zeebe/tree/master/clients/zbctl) - CLI to interact with Zeebe

## Others

*Zeebe integrations with other systems*

- [Spring integration](https://github.com/zeebe-io/spring-zeebe)
- [Kafka Connector](https://github.com/berndruecker/kafka-connect-zeebe)


## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

To the extent possible under law, Zeebe has waived all copyright and
related or neighboring rights to this work.
