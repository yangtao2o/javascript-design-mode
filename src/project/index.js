class Subject {
  constructor() {
    this.status = status;
    this.observers = [];
  }
  getState () { 
    return this.status 
  }
  setState (status) {
    this.status = status;
    this.notifyAllObserver = notifyAllObserver();
  }
  notifyAllObserver () {
    this.observers.forEach(observer => {
      observer.update()
    });
  }
  attatch(observer) {
    this.observers.push(observer)
  }
}

class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }
  update() {
    
  }
}