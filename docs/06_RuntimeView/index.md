# 6. Runtime View

**Contents**

The runtime view describes concrete behavior and interactions of the
system's building blocks in form of scenarios from the following areas:

-   important use cases or features: how do building blocks execute
    them?

-   interactions at critical external interfaces: how do building blocks
    cooperate with users and neighboring systems?

-   operation and administration: launch, start-up, stop

-   error and exception scenarios

### Diagrams
https://docusaurus.io/docs/next/markdown-features/diagrams

https://mermaid.js.org/intro/getting-started.html


```mermaid
flowchart LR
  A --> B;
  B --> A;
```
---

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

---

**Sequence Diagrams**

```mermaid
sequenceDiagram
    participant A as Alice
    participant B as Bob
    participant C as Charlie
    
    A->>B: Hello Bob, how are you?
    B->>A: I am good, thanks!
    A->>C: Hi Charlie, what about you?
    C-->>A: I am doing great!
```

---

**With Error Handling**

```mermaid
sequenceDiagram
    participant A as Alice
    participant B as Bob
    participant C as Charlie
    
    A->>B: Request data
    B->>C: Fetch data from service
    C-->>B: Data retrieved successfully
    B-->>A: Here is the data

    alt Data not available
        C-->>B: Error: Data not found
        B-->>A: Sorry, data not available
    end

    A->>C: Thanks!
```

---

**With lifetime bars**
```mermaid
sequenceDiagram
    participant A as Alice
    participant B as Bob
    participant C as Charlie
    
    A->>B: Request data
    activate B
    
    B->>C: Fetch data from service
    activate C
    
    alt Successful data retrieval
        C-->>B: Data retrieved successfully
        B-->>A: Here is the data
    else Data not available
        C-->>B: Error: Data not found
        B-->>A: Sorry, data not available
    end
    deactivate C
    
    B-->>A: Process completed
    deactivate B

    A->>C: Thank you!
```

---

**Complex Sequence**

```mermaid
sequenceDiagram
    participant A as ServiceA
    participant B as ServiceB
    participant C as ServiceC

    A->>B: Request data from ServiceB
    activate B
    
    B->>C: Fetch data from ServiceC
    activate C
    C-->>B: Data retrieved successfully
    deactivate C

    alt Data not available in ServiceC
        C-->>B: Error: Data not found
        B-->>A: Error: ServiceC data not available
    else Data available
        B-->>A: Here is the data from ServiceC
    end
    deactivate B
    
    alt ServiceA needs to process data
        A->>A: Processing data internally
        activate A
        A-->>A: Data processed
        deactivate A
    else ServiceA passes data to ServiceB
        A->>B: Forwarding data to ServiceB
        activate B
        B-->>A: Data processed by ServiceB
        deactivate B
    end
    
    A->>C: Notify ServiceC about completion
    activate C
    C-->>A: Acknowledged
    deactivate C

```