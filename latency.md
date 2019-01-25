# Testing Latency in SPAs

* Jordan Hawker 
* @JordanHawker 
* Front-end engineer at LinkedIn 
* jhawk.co/forwardjs

## Why

* Business metrics are affected 
* Bounce Rates 
* Conversions 
* Feature Throughput 
* Revenue Impact 
* User Satisfaction 

## How 

* Get data 
* Backend Instrumentation 
* Can we track across the whole stack 
* Not just APIs 

## Web Application Performance 

* Many different definitions 
* Define what Interactivity means 
* User perceived latency 
* When the user thinks they can interact with the page 

## Priority

* User Experience 
* Translates to real world impact (what users are experiencing)

## Tools

* Page Speed Insights 
  * Wide variety of information and testing
  * May be too general 
* WebPageTest
  * Very configurable 
  * Will run multiple test runs, outputs median 
  * Lots of detail 
  * Screenshots 
  * Waterfall of network requests 
* Lighthouse 
  * In Chrome Devtools 

## Architecture 

* Understand Critical Path 
  * Primary content
  * Components in Primary content are critical
* Subscriber - Reporter relationship 
  * A parent can be a child 
  * dependencies tracked through these relationships

## Implementation 

* Avoid tapping into Render hook
* Use post-render hooks 
* Account for async behavior 
* How are requests handled, image onLoad
* Capture per-component events, roll-up to page level, checking parent interactivity as child completes
* Common method to check complex conditions (common interface for tracking conditions)

### React 

* componentDidMount 
  * invoked after a component is mounted 
* Create a higher-order component (HOC)
  * Will provide components with latency behavior without explicit repeated implementation 
* Parent/Child relationship via pass-down 
  * this.props.children

### Ember 

* Routes: didTransition 
* Components: didInsertElement 
* Leverage Runloop 
  * run.scheduleOnce("afterRender", this, this.reportinteractive)
* Parent/Child relationship 
  * this.parentView is a direct reference 
* There's emberinteractivity to solve this for you 

### Angular 

* ngAfterContentInit - after full initialization of a directive 
* Parent/Child 

### Vue 

* mounted
* Avoid this.nextTick 
* Parent/Child Relationship 
  * this.$parent

## Developer Tooling 

### Performance API 

* Provides interface for performance information 
* performance.mark - creates timestamp in buffer 
* performance.measure - creates a measure between two timestamps
* data can be inspected, tracked, visualized 
* Use performance tab in DevTools, performance metrics will appear as part of the waterfall 
* Will appear in webpagetest as well 

## Takeaways 

* Define critical path 
  * Use data to start conversations with UX/Design/Product 
* Identify bottlenecks 
  * Focus on slow components and why the elements are slow to load
  * Maybe slow items can be deferred? 
* Defer non-critical 
* Holistic user-centric metrics reflect improvements across the stack 
  * A way to track and evaluate if changes are really making a difference 

## Moving Forward

* Use multiple tools
* Measuring each layer of the stack is useful 
* capture real user metrics to understand impact 
* Virtual maschines are insufficient simulations 
  * Network latency could be an issue and VM's don't capture that 
  * Get data around actual browser useage 
* Use framework-aware tools for granual data 
* Be aware of the impact of leveraging framework internals 
  * Use lifecycle hooks the framework provides, avoid blocking calls 
* Sample if live in production with high volume usage







