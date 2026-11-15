# Project architecture

- Keep Brazilian phone normalization, validation and quote URL construction in a shared pure module so input and outgoing messages follow the same rules.
- Use router-aware section links and one navigation scroll handler so home and privacy navigation share sticky-header offsets.
- Keep gallery dialogs on Radix primitives with explicit trigger focus restoration so all dismissal methods preserve keyboard position.
- Keep approved commercial media metadata in a shared catalog and resolve only existing portfolio files; omit unavailable media rather than fabricate replacements or request broken URLs.
- Mount video sources only after an explicit watch action and use one focus-restoring media dialog so simultaneous playback cannot occur.