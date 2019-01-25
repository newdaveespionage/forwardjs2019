# Tensorflow 

## Intro to ML 

### AI and ML 

* AI - making machines solve problems associated with human intelligence 
  * Strong AI / True AI - Making machines indistinguishable from humans
* ML - Make machines learn from experience instead of explicit programming 
* DL - Machine learning using deep neural networks (very large datasets)
* http://experiments.withgoogle.com/collection/ai

### Activity Detection 

* Observing a person doing something 
* Measure speed at which person moves 
* Develop rule to classify walking (speed < 4)
* Develop rule to classify running (speed > 4)
* Develop rule to classify cycling (speed > 12)

#### Issues

* Breaks down easily as rules are hard to maintain 
* Similar to initial spam detection implementation (a continually growing list of rules without a formulaic solution)

### Traditional Programming vs ML 

* TP - Answers + Data = Rules (hard logic, inflexible) 
* ML - Data + Labels create Models = Predictions (fuzzy logic)

### ML flow 

* Take source data
* Classify data 
* Apply 
* Evaluate
* Adjust model 

### Determing how to classify 

* Features that are disparate (easy to delineate) work best 

### Supervised Machine Learning

* Do manual labelling
* Run analysis on data
* Evaluate match vs. loss ratio and adjust 
* Everything is learned from data 
* No domain knowledge or feature engineering needed
* Separate layers 
* Each layer has neurons/nodes 
* Feed source data to largest base layer 
  * broad evaluator
  * pixels
  * edges
* It feeds layer up to subsequent higher layer 
  * gradually higher classification
  * eventually identifying concepts such as "ear of dog", "eye of cat" 

### Functions a Deep Neural Network can Learn 

* Images
* Audio
* Text to text
* Text to speech 
* Pixels

### Tensorflow as an open source package 

* Launched about 3 years ago 
* #1 repository in ML on GitHub 
* Very popular on StackOverflow
* "I'm kind of a big deal" audio sample here would be appropriate

### Language uses 

* Python highly used for ML
* Javascript highly used in general 
* Hence Tensorflow.js

### Architecture 

* Core API - base math 
* Layers API - assembling models 
* Models - pre-trained models for identification
* Browser -> WebGL
* Node.js -> Hardware

## Hands-on exercise 1 

* Image and image capture recognition
* https://bit.ly/2B5QJQI
* https://codelabs.developers.google.com/ (search tensorflow js)
* https://codelabs.developers.google.com/codelabs/tensorflowjs-teachablemachine-codelab/index.html
* pac-man https://js.tensorflow.org/


## Hands-on exercise 2 

* Audio recognition
* Convolutional Neural Network 
* FFT - Fast Fourier Transform 
* Spectrogram becomes data for training 
* Leveraging Layers api (similar to Keras)
* https://codelabs.developers.google.com/codelabs/tensorflowjs-audio-codelab/index.html


## Guided Tutorial 
