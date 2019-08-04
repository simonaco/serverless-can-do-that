# Serverless can do that?!

**Abstract:** As a frontend developer you might think - why would I even care about servers? Or lack thereof!

In this session we'll explore how empowering serverless is for the Javascript developer and how much we can already achieve by not reinventing the wheel. We'll also sprinkling a bit of serverless magic and learn how we can use it once we add it to our toolbox.

## Running locally

```
docker run -it -v <your_path_here>:/repo -p 9000:9000 gitpitch/desktop:pro
```

## Push to cloud

```
docker build --rm -f "Dockerfile" -t sicotin.azurecr.io/tourprez:1.0 .
docker push sicotin.azurecr.io/tourprez:1.0
```