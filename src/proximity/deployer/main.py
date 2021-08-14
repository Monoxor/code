from kubernetes import client, config

# Configs can be set in Configuration class directly or using helper utility
config.load_kube_config()

v1 = client.CoreV1Api()

#container
container = client.V1Container(
  name='busybox',
  image='busybox',
)
#template
template = client.V1PodTemplateSpec(
    metadata=client.V1ObjectMeta(labels={'name': 'simple-job'}),
    spec=client.V1PodSpec(restart_policy='OnFailure', containers=[container]))
#spec
spec = client.V1JobSpec(template=template)