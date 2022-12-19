package httpapi.authz
import input
default allow = false



allow {
  {"name": input.name,"groupname": input.groupname} = data.geostore.usergroup[_]
  input.request_path = ["v1", "collection"]
  input.company = "dominos"
  input.request_method = "GET"
  input.groupname = "EDITOR_DPAU"
}

allow {
  {"name": input.name,"groupname": input.groupname} = data.geostore.usergroup[_]
  input.request_path = ["v2", "collection"]
  input.company = "Chowdeck"
  input.request_method = "UPDATE"
  input.groupname = "EDITOR_CPQ"
}

allow {
  {"name": input.name,"groupname": input.groupname} = data.geostore.usergroup[_]
  input.request_path = ["v2", "chance"]
  input.company = "goBeyond"
  input.request_method = "UPDATE"
  input.groupname = "VIEWER"
}

