'use strict';
import { context, trace } from '@opentelemetry/api';
import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/tracing';
import { CollectorTraceExporter } from '@opentelemetry/exporter-collector';
import { WebTracerProvider } from '@opentelemetry/web';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';
import { CompositePropagator, HttpTraceContextPropagator } from '@opentelemetry/core';
import { ResourceAttributes } from '@opentelemetry/semantic-conventions';
import { Resource } from '@opentelemetry/resources';

const collectorOptions = {
      url: 'https://telemetry.hespera.net/v1/trace', // url is optional and can be omitted - default is http://localhost:55681/v1/trace
      headers: {}, // an optional object containing custom headers to be sent with each request
      concurrencyLimit: 10, // an optional limit on pending requests
};


const provider = new WebTracerProvider({
  resource: Resource.default().merge(
    new Resource({
      [ResourceAttributes.SERVICE_NAME]: 'blog',
    })
  ),
});

provider.addSpanProcessor(new SimpleSpanProcessor(new CollectorTraceExporter(collectorOptions)));

provider.register({
    propagator: new CompositePropagator({
    propagators: [
          new HttpTraceContextPropagator(),
    ],
  }),
});

registerInstrumentations({
  instrumentations: [
    new DocumentLoadInstrumentation(),
  ],
});

const webTracerWithZone = provider.getTracer('default');
