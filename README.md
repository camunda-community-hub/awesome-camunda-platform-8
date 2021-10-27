# Awesome Camunda Cloud

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Contribute](https://img.shields.io/badge/contribute-project-blue.svg)](https://github.com/camunda-community-hub/awesome-camunda-cloud/pulls)

A curated list of awesome [Camunda Cloud](https://camunda.io) projects, mostly driven by the community. Inspired by [awesome-go](https://github.com/avelino/awesome-go).

Previously this list contained only Zeebe awesome-ness. Help us collect all things awesome about Camunda Cloud and Zeebe, the workflow engine powering Camunda Cloud.

## Contributing

Contributions are welcome, if you build something awesome with Camunda Cloud please let us know. Take a quick gander at the [contribution guidelines](CONTRIBUTING.md) first. If you would like, you can also join the [Camunda Community Hub](https://github.com/Camunda-Community-Hub/community/), which is a centralized home for all Camunda Community contributed extensions!

If you see a package or project here that is no longer maintained or is not a good fit, please submit a pull request to improve this file. Thank you!

## Contents

* [Clients and Programming Framework Integrations](#clients-and-programming-framework-integrations)
* [Connectors and Bridges](#connectors-and-bridges)
* [Job Workers](#job-workers)
* [Exporters](#exporters)
* [Applications](#applications)
* [Testing](#testing)
* [Others](#others)

# Awesome Projects

## Clients and Programming Framework Integrations

Client libraries to interact with Camunda Cloud and Zeebe

- [Java](https://github.com/camunda-cloud/zeebe/tree/master/clients/java)
  - [Spring](https://github.com/camunda-community-hub/spring-zeebe)
- [Go](https://github.com/camunda-cloud/zeebe/tree/master/clients/go)
- [C#](https://github.com/camunda-community-hub/zeebe-client-csharp)
- [Delphi](https://github.com/camunda-community-hub/DelphiZeeBeClient)
- [Ruby](https://github.com/zeebe-io/zeebe-client-ruby)
  - [Beez](https://github.com/gottfrois/beez) - Simple, efficient ruby workers for Zeebe
- [Node.js](https://github.com/camunda-community-hub/zeebe-client-node-js)
  - [NestJS](https://github.com/camunda-community-hub/nestjs-zeebe#readme)
- [Rust](https://github.com/camunda-community-hub/zeebest)
- Python:
  - [Zeebe Python gRPC](https://pypi.org/project/zeebe-grpc/)
  - [Pyzeebe](https://github.com/camunda-community-hub/pyzeebe)
- [WorkIt](https://github.com/VilledeMontreal/workit) - Node.js (TypeScript) client for both Zeebe and Camunda BPM platforms

**Want a client for another language?**

Thanks to gRPC you can generate client stubs easily as described in [Generating a Zeebe-Python Client Stub in Less Than An Hour: A gRPC + Zeebe Tutorial](https://camunda.com/blog/2018/11/grpc-generating-a-zeebe-python-client/).


## Connectors and Bridges

Connector: A piece of software that connects Camunda Cloud or Zeebe with some other system or infrastructure. Might be uni or bidirectional and possibly includes a job worker.

- [Kafka Connector](https://github.com/camunda-community-hub/kafka-connect-zeebe)
- [HTTP](https://github.com/camunda-community-hub/zeebe-http-worker) - Zeebe job worker for making HTTP calls
- [Lambda](https://github.com/camunda-community-hub/zeebe-lambda-worker) - A Zeebe worker to invoke AWS Lambdas (Serverless functions), allowing to orchestrate functions
- [Node-RED Zeebe nodes](https://github.com/camunda-community-hub/node-red-contrib-zeebe)
- [Zeebe GitHub Action](https://github.com/marketplace/actions/zeebe-action) - Integrate Zeebe into GitHub Workflows with Camunda Cloud

## Job Workers

Job Worker: A special type of client that polls for and executes available jobs. In contrast to connectors and bridges, such workers do not connect to other active pieces of software primarily (for example, a 'DMN Connector' might connect Zeebe to a managed DMN Engine, a 'DMN worker' will use a DMN library to execute decisions).

- [Script](https://github.com/camunda-community-hub/zeebe-script-worker) - Zeebe job worker for evaluating JS, Groovy, and FEEL scripts
- [DMN Scala](https://github.com/camunda-community-hub/dmn-scala/tree/master/zeebe-worker) - Zeebe job worker using the [Scala DMN engine](https://github.com/camunda/dmn-scala)
- [Camunda DMN](https://github.com/camunda-community-hub/zeebe-dmn-worker) - Zeebe job worker using the [Camunda DMN engine](https://github.com/camunda/camunda-engine-dmn)
- [Zeebe Slack Worker](https://github.com/camunda-community-hub/zeebe-slack-worker) - A Node.js library for building job workers that send messages to Slack based on service tasks.

## Exporters

Exporters to load data into external systems, only available with Camunda Cloud Self-Managed.

- [Elasticsearch](https://github.com/zeebe-io/zeebe/tree/master/exporters/elasticsearch-exporter)
- [Event Store](https://github.com/jwulf/zeebe-eventstore-exporter)
- [Hazelcast](https://github.com/camunda-community-hub/zeebe-hazelcast-exporter)
- [Incident Alerter (Webhook)](https://github.com/jwulf/zeebe-incident-alerter)
- [Kafka](https://github.com/camunda-community-hub/zeebe-kafka-exporter)
- [CSV](https://github.com/zeebe-io/zeebe-csv-exporter)
- [NATS Streaming Server](https://github.com/MrSaints/zeebe-nats-streaming-exporter)
- [MongoDB](https://github.com/crossid/zeebe-mongo-exporter)

**Want an exporter for another system?**

You can build one in as little as 15 minutes. Take a look at the [Zeebe Exporter Demo](https://github.com/jwulf/zeebe-exporter-demo), and the tutorial blog posts [Part One](https://zeebe.io/blog/2019/05/exporter-part-1/) and [Part Two](https://zeebe.io/blog/2019/05/exporter-part-2/).

## Applications

Applications to interact with Camunda Cloud and Zeebe

- [Simple Monitor](https://github.com/camunda-community-hub/zeebe-simple-monitor) - A lightweight application for monitoring and interacting with Zeebe during development
- [ZeeQS](https://github.com/camunda-community-hub/zeeqs) - GraphQL query API for aggregated Zeebe data
- [Modeler](https://github.com/zeebe-io/zeebe-modeler) - Use Zeebe Modeler to model your workflow in a desktop application
- [zbctl](https://github.com/zeebe-io/zeebe/tree/master/clients/zbctl) - CLI to interact with Zeebe
- [zbctl via npm](https://www.npmjs.com/package/zbctl) - zbctl is just an `npm install` away
- [dockerised zbctl](https://hub.docker.com/r/sitapati/zbctl) - See [these notes on using it in CI](https://forum.zeebe.io/t/use-docker-compose-cant-find-bpmn-file/1004/3?u=jwulf)
- [Workflow Linter](https://github.com/StephenOTT/Workflow-Linter) - Workflow Linter for BPMN workflows
- [Zeebe Cloud Canary](https://github.com/jwulf/zeebe-cloud-canary) - Monitor the aliveness of a Zeebe broker
- [Zeebe Simple Tasklist](https://github.com/camunda-community-hub/zeebe-simple-tasklist) - Zeebe job worker for manual/user tasks
- [Quintessential Task List](https://github.com/StephenOTT/Quintessential-Tasklist-Zeebe) - The quintessential Zeebe tasklist for BPMN Human tasks with Drag and Drop Form builder, client and server side validations, and drop in Form Rendering
- [Python-Zeebe Sandbox](https://github.com/nimanamjouyan/python-zeebe) - A FastAPI python sandbox for Zeebe to deploy workflows, run instances and publish messages. This dockerised app runs Zeebe Simple Monitor, a single node Zeebe broker and a FastAPI python container to allow exploration/investigation of Zeebe features and workflows.

## Testing

Test utilities to help you develop Camunda Cloud or Zeebe-dependent applications

- [Zeebe Test Container](https://github.com/camunda-community-hub/zeebe-test-container) - [TestContainers](https://testcontainers.org) module to help you write integration tests against configurable Zeebe instances.
- [Zeebe Chaos](https://github.com/zeebe-io/zeebe-chaos) - contains everything related to chaos engineering and Zeebe, like chaos experiments, an hypotheses backlog etc.
- [Zeebe BPMN RSpec](https://github.com/ezcater/zeebe_bpmn_rspec) - Ruby gem to test workflow logic in Zeebe using RSpec.
- [BPMN Spec](https://github.com/camunda-community-hub/bpmn-spec) - a tool to write tests for BPMN workflows on run them on Zeebe
- [Zeebe Performance Benchmarking / Tuning Tool](https://zeebe.io/blog/2020/11/zeebe-performance-tool/) - a performance benchmarking and tuning spreadsheet from Camunda Consultant Falko Menge.
- [Zeebe Worker Java Testutils](https://github.com/camunda-community-hub/zeebe-worker-java-testutils) - Utilities to test Zeebe workers implemented in Java

## Others

Other Camunda Cloud & Zeebe related applications

- [Helm Charts](https://helm.camunda.io/) - [Helm](https://helm.sh/) charts to deploy Zeebe to Kubernetes.
- [Portainer Templates](https://camunda-community-hub.github.io/zeebe-portainer-templates/) - [Portainer](https://www.portainer.io/) templates to deploy Zeebe to Docker.
- [zdb](https://github.com/Zelldon/zdb) - Zeebe debug and inspection tool, allows to inspect the log and internal state of Zeebe.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

To the extent possible under law, Zeebe has waived all copyright and
related or neighboring rights to this work.
