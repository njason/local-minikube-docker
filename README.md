# local-minikube-docker
Example project on how to use local docker images on minikube

[Tutorial](https://medium.com/bb-tutorials-and-thoughts/how-to-use-own-local-doker-images-with-minikube-2c1ed0b0968)

## Graceful shutdown test

After creating the deployment, tail the logs of the created pod, `kubectl logs --follow nodejs-api-58b77f7d96-lv66d`

Then, delete the pod `kubectl delete pods nodejs-api-58b77f7d96-lv66d`, the pod should then be in the terminating state, but you should not see the message `Received shutdown signal` for 10 seconds because of the sleep command in the preStop hook.
