/*
Correct flow: Controller → Service → Model

Controllers call Services, Services call Models.

Controllers should never call Models directly (breaks separation of concerns).
Models should NEVER call Controllers (would create circular dependencies).

If you had to pick one: Controllers could call Models, but it's bad practice.
*/